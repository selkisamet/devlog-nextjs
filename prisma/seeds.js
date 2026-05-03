import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.post.createMany({
        data: [
            {
                slug: "nextjs-nedir",
                title: "Next.js Nedir? Neden Kullanılır?",
                excerpt: "Modern web geliştirme dünyasının yükselen yıldızı Next.js'i inceliyoruz.",
                content: "Next.js, React üzerine kurulmuş, sunucu taraflı render sunan bir framework'tür.",
            },
            {
                slug: "react-vs-nextjs",
                title: "React mı Next.js mi?",
                excerpt: "Hangi projede hangisini seçmelisiniz?",
                content: "Eğer sadece UI kütüphanesi istiyorsanız React, full-stack için Next.js.",
            },
            {
                slug: "css-modules-ipclari",
                title: "CSS Modules İpuçları",
                excerpt: "Daha temiz ve yönetilebilir CSS yazmanın yolları.",
                content: "CSS Modules, Next.js projelerinde stil çakışmalarını önlemek için harika.",
            },
        ],
    });
    console.log("✅ Veriler eklendi!");
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
