import styles from "./header.module.css";

function Logo() {
  return (
    <a href="/" className={styles.logo} style={{ display: "inline-block" }}>
      LOGO
    </a>
  );
}

export default Logo;
