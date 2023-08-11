import styles from "../styles/Button.module.css";

function StartButton({ label }) {
  return (
    <button
      type="submit"
      className={`${styles.button} ${styles.primaryColor}`}
      aria-label={label}
      title={label}
    >
      start
    </button>
  );
}

export default StartButton;
