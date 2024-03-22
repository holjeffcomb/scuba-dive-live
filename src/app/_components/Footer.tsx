import styles from "../page.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <p className={styles.footerStyles}>
        &copy; {currentYear} Scuba Dive Live. All rights reserved.
      </p>
    </>
  );
}
