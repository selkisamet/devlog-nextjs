export default async function Projects() {
    // GitHub API'dan kullanıcı repolarını çekelim
    // NOT: 'vercel' yerine kendi GitHub kullanıcı adını yazabilirsin
    const response = await fetch("https://api.github.com/users/selkisamet/repos", {
        next: { revalidate: 3600 } // Veriyi 1 saatte bir (3600 sn) tazele (ISR)
    });

    if (!response.ok) {
        throw new Error("Projeler yüklenirken bir hata oluştu.");
    }

    const repos = await response.json();

    return (
        <div>
            <h1>Projelerim</h1>
            <p>GitHub üzerinden otomatik çekilen repolarım:</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
                {repos.slice(0, 10).map((repo) => (
                    <div key={repo.id} style={{ padding: "1.5rem", border: "1px solid #333", borderRadius: "8px", background: "#1a1a2e" }}>
                        <h3 style={{ color: "#e94560" }}>{repo.name}</h3>
                        <p style={{ fontSize: "0.9rem", margin: "0.5rem 0", color: "#ccc" }}>
                            {repo.description || "Açıklama bulunmuyor."}
                        </p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                            <span style={{ fontSize: "0.8rem", color: "#888" }}>⭐ {repo.stargazers_count}</span>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#e94560", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}
                            >
                                GitHub'da Gör →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
