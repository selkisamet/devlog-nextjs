import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return Response.json(posts);
    } catch (error) {
        return Response.json({ error: "Veriler çekilemedi" }, { status: 500 });
    }
}
