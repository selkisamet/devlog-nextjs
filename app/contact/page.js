import ContactForm from "@/components/ContactForm";

// STATİK METADATA
export const metadata = {
    title: "İletişim | DevLog",
    description: "Bizimle iletişime geçin, sorularınızı sorun.",
};

export default function ContactPage() {
    return (
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <h1>Bize Ulaşın</h1>
            <ContactForm />
        </div>
    );
}
