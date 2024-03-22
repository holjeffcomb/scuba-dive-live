import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function Header() {
  return (
    <>
      <Image
        className={styles.headerLogo}
        src="/images/sdl-logo.webp"
        width={300}
        height={300}
        alt={"Scuba Dive Live logo"}
      />
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/episodes">Episodes</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </>
  );
}
