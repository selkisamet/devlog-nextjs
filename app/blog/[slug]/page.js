import { prisma } from "@/lib/prisma";
import LikeButton from "@/components/LikeButton";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await prisma.post.findUnique({ where: { slug } });

    if (!post) return { title: "Yazı Bulunamadı" };

    return {
        title: `${post.title} | DevLog`,
        description: post.excerpt,
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;

    // Veritabanından slug'a göre tek bir yazı bul
    const post = await prisma.post.findUnique({
        where: { slug },
    });

    if (!post) notFound();

    return (
        <div>
            <article>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{post.title}</h1>
                <p style={{ color: "#888", marginBottom: "2rem", fontSize: "0.9rem" }}>
                    {new Date(post.createdAt).toLocaleDateString("tr-TR")}
                </p>
                <div style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
                    {post.content}
                </div>
            </article>

            <div style={{ marginTop: "2rem", paddingTop: "1rem", borderTop: "1px solid #333" }}>
                <LikeButton />
            </div>
        </div>
    );
}
