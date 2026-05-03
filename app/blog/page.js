import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Blog() {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc' // En yeni yazılar en üstte gelsin
        }
    });

    return (
        <div>
            <h1>Blog Yazıları</h1>
            <p>Son paylaştığım yazılar:</p>

            <div style={{ marginTop: "2rem" }}>
                {
                    posts.map((post) => (
                        <div key={post.id} style={{ marginBottom: "1.5rem", padding: "1rem", border: "1px solid #333", borderRadius: "8px" }}>
                            <h2>{post.title}</h2>
                            <p style={{ color: "#aaa", margin: "0.5rem 0" }}>
                                {post.excerpt}
                            </p>
                            <Link href={`/blog/${post.slug}`} style={{ color: "#e94560", fontWeight: "bold" }}>
                                Devamını Oku →
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}