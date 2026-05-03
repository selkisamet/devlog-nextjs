export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/api/", // API klasörünü tarama
        },
        sitemap: "https://devlog-samet.vercel.app/sitemap.xml",
    };
}
