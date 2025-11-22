import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex gap-4">
        <Link href="/">Logo</Link>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </div>
  );
}
