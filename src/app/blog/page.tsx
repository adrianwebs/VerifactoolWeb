import React from "react";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog sobre Verifactu, Contabilidad y CRM | VerifacTool",
    description:
        "Aprende todo sobre el reglamento Verifactu, cómo digitalizar tu negocio y consejos de contabilidad para autónomos y pymes.",
};

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <header className="pt-32 pb-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Blog VerifacTool</h1>
                    <p className="text-text-body text-lg max-w-2xl mx-auto">
                        Guías, consejos y novedades sobre facturación, normativa Verifactu y gestión empresarial.
                    </p>
                </div>
            </header>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.slug} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                                        {/* Placeholder for image */}
                                        <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                                            <span className="text-primary font-bold uppercase tracking-widest opacity-20">{post.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="px-3 py-1 rounded-full bg-accent-blue text-primary text-[10px] font-bold uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                            <time className="text-xs text-text-body/60">{post.date}</time>
                                        </div>
                                        <h2 className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-text-body text-sm line-clamp-3 mb-6">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-primary font-bold text-sm uppercase tracking-widest">
                                            Leer más
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
