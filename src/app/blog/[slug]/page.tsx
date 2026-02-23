import React from "react";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    const slugs = getBlogSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = getBlogPostBySlug(slug);
        return {
            title: `${post.title} | Blog VerifacTool`,
            description: post.metaDesc,
            keywords: post.keywords,
            openGraph: {
                title: post.title,
                description: post.metaDesc,
                type: "article",
                publishedTime: post.date,
                url: `https://verifactool.com/blog/${slug}`,
            },
            alternates: {
                canonical: `https://verifactool.com/blog/${slug}`,
            },
        };
    } catch (e) {
        return { title: "Post no encontrado" };
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;

    let post;
    try {
        post = getBlogPostBySlug(slug);
    } catch (e) {
        notFound();
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.metaDesc,
        "datePublished": post.date,
        "author": {
            "@type": "Organization",
            "name": "VerifacTool"
        },
        "image": `https://verifactool.com${post.img}`,
        "publisher": {
            "@type": "Organization",
            "name": "VerifacTool",
            "logo": {
                "@type": "ImageObject",
                "url": "https://verifactool.com/logo.png"
            }
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://verifactool.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://verifactool.com/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://verifactool.com/blog/${slug}`
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={articleSchema} />
            <JsonLd data={breadcrumbSchema} />
            <Navbar />

            <article className="pt-32 pb-20">
                <header className="container mx-auto px-4 md:px-6 max-w-4xl mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-accent-blue text-primary text-xs font-bold uppercase tracking-wider">
                            {post.category}
                        </span>
                        <time className="text-sm text-text-body/60 font-medium">{post.date}</time>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-8">
                        {post.title}
                    </h1>
                    <p className="text-xl text-text-body leading-relaxed border-l-4 border-primary pl-6 py-2 italic">
                        {post.excerpt}
                    </p>
                </header>

                <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg prose-navy">
                    <MDXRemote source={post.content} />
                </div>
            </article>

            <div className="bg-gray-50 py-20 border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
                    <h3 className="text-2xl font-bold text-navy mb-6">¿Te ha gustado este artículo?</h3>
                    <p className="text-text-body mb-10">
                        Descubre cómo VerifacTool puede ayudarte a simplificar tu gestión y cumplir con la normativa Verifactu desde hoy mismo.
                    </p>
                    <Link href="/#precios" className="btn-primary">
                        Probar VerifacTool Gratis
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
