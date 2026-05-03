"use client";

import { useState } from "react";
import styles from "./LikeButton.module.css";

export default function LikeButton() {
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false);

    function handleClick() {
        if (liked) {
            setCount(count - 1);
            setLiked(false);
        } else {
            setCount(count + 1);
            setLiked(true);
        }
    }

    return (
        <button
            className={`${styles.button} ${liked ? styles.liked : ""}`}
            onClick={handleClick}
        >
            {liked ? "❤️" : "🤍"} {count}
        </button>
    );
}
