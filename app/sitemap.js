import { prisma } from "@/lib/prisma";

export default async function sitemap() {
    const baseUrl = "https://devlog-samet.vercel.app";

    // Veritabanından tüm yazıların slug'larını çekiyoruz
    const posts = await prisma.post.findMany({
        select: {
            slug: true,
            updatedAt: true,
        },
    });

    const blogPosts = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt,
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/projects`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        ...blogPosts,
    ];
}
