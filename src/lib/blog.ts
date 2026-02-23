import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIRECTORY = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    category: string;
    date: string;
    img: string;
    metaDesc: string;
    keywords: string[];
    excerpt: string;
    content: string;
}

export function getBlogSlugs() {
    return fs.readdirSync(BLOG_DIRECTORY).filter(file => file.endsWith('.mdx'));
}

export function getBlogPostBySlug(slug: string): BlogPost {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(BLOG_DIRECTORY, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        title: data.title,
        category: data.category,
        date: data.date,
        img: data.img,
        metaDesc: data.metaDesc,
        keywords: data.keywords,
        excerpt: data.excerpt,
        content,
    };
}

export function getAllBlogPosts(): BlogPost[] {
    const slugs = getBlogSlugs();
    const posts = slugs
        .map((slug) => getBlogPostBySlug(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
