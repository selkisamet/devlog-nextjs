import data from "@/data.json";

export default function sitemap() {
    const baseUrl = "https://devlog-samet.vercel.app"; // Kendi URL'in olacak

    // Blog yazılarını haritaya ekle
    const blogPosts = data.posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/projects`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        ...blogPosts,
    ];
}
