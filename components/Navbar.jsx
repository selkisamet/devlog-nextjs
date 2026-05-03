import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles["navbar-brand"]}>
                <Link href="/">DevLog</Link>
            </div>
            <ul className={styles["navbar-links"]}>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/projects">Projeler</Link></li>
                <li><Link href="/about">Hakkımda</Link></li>
                <li><Link href="/contact">Bize Ulaşın</Link></li>
            </ul>
        </nav>
    );
}