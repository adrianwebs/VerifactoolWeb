import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://verifactool.com';
    const posts = getAllBlogPosts();

    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const staticUrls = [
        {
            url: baseUrl,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'daily' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/software-verifactu`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/software-contabilidad-online`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/precios`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/verifactu`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/verifactu/que-es`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/sanciones`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/requisitos-tecnicos`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/software-compatible`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/cuando-entra-en-vigor`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/errores-comunes`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/es-obligatorio-autonomos`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/como-funciona`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/mejor-software-verifactu`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/demo`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ];

    return [...staticUrls, ...blogUrls];
}
