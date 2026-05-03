"use client";
import { useActionState } from "react";
import { handleContactAction } from "@/lib/actions";
import SubmitButton from "@/components/SubmitButton";

export default function ContactForm() {
    const [state, formAction] = useActionState(handleContactAction, null);

    return (
        <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
            {state?.success && (
                <div style={{ padding: "1rem", background: "#2e7d32", color: "#fff", borderRadius: "4px" }}>
                    {state.message}
                </div>
            )}
            <input name="name" placeholder="Adınız" required style={{ padding: "0.8rem", background: "#1a1a2e", border: "1px solid #333", color: "#fff" }} />
            <input name="email" type="email" placeholder="E-posta" required style={{ padding: "0.8rem", background: "#1a1a2e", border: "1px solid #333", color: "#fff" }} />
            <textarea name="message" placeholder="Mesajınız" rows="5" required style={{ padding: "0.8rem", background: "#1a1a2e", border: "1px solid #333", color: "#fff" }}></textarea>
            <SubmitButton />
        </form>
    );
}
