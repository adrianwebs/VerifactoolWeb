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

    // SEO-OPTIMIZED SITEMAP: Only include URLs with real content (page.tsx exists)
    // Phantom URLs (404s) hurt crawl budget — add them back when pages are built
    const staticUrls = [
        // === PILARES (Máxima prioridad) ===
        {
            url: baseUrl,
            lastModified: '2026-04-11',
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/verifactu`,
            lastModified: '2026-04-11',
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/software-facturacion`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/software-facturacion/verifactu`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        // === CONVERSIÓN (BOFU) ===
        {
            url: `${baseUrl}/precios`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/demo`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        // === SILO VERIFACTU (Contenido indexado) ===
        {
            url: `${baseUrl}/verifactu/que-es`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/sanciones`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/requisitos-tecnicos`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/software-compatible`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/cuando-entra-en-vigor`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/errores-comunes`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/es-obligatorio-autonomos`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/verifactu/como-funciona`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        // === COMPARATIVAS ===
        {
            url: `${baseUrl}/comparativas/mejor-software-facturacion`,
            lastModified: '2026-04-11',
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        // === CONTENIDO ===
        {
            url: `${baseUrl}/blog`,
            lastModified: posts.length > 0
                ? new Date(posts[0].date).toISOString().split('T')[0]
                : '2026-04-11',
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/software-contabilidad-online`,
            lastModified: '2026-04-11',
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/clientes`,
            lastModified: '2026-03-26',
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        // TODO: Añadir cuando se creen los page.tsx:
        // /software-facturacion/autonomos
        // /software-facturacion/pymes
        // /comparativas/holded-alternativa
        // /comparativas/quipu-alternativa
        // /funcionalidades/facturacion-electronica
        // /recursos/faq-verifactu
    ];

    return [...staticUrls, ...blogUrls];
}
