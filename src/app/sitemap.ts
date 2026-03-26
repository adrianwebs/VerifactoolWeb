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

    // Use real fixed dates for static pages instead of new Date()
    // This prevents Google from seeing every rebuild as a "content update"
    const staticUrls = [
        {
            url: baseUrl,
            lastModified: '2025-03-15',
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: posts.length > 0
                ? new Date(posts[0].date).toISOString().split('T')[0]
                : '2025-03-15',
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/software-verifactu`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/software-contabilidad-online`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/precios`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/verifactu`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/verifactu/que-es`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/sanciones`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/requisitos-tecnicos`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/software-compatible`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/cuando-entra-en-vigor`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/errores-comunes`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/es-obligatorio-autonomos`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/como-funciona`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/mejor-software-verifactu`,
            lastModified: '2025-03-15',
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/demo`,
            lastModified: '2025-03-10',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/clientes`,
            lastModified: '2026-03-26',
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ];

    return [...staticUrls, ...blogUrls];
}
