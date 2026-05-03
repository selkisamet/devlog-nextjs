"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            style={{
                padding: "1rem",
                background: pending ? "#444" : "#e94560",
                color: "#fff",
                border: "none",
                cursor: pending ? "not-allowed" : "pointer",
                fontWeight: "bold"
            }}
        >
            {pending ? "Gönderiliyor..." : "Gönder"}
        </button>
    );
}
