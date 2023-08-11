import styles from "../styles/Button.module.css";

function StopButton({ label }) {
  return (
    <button
      type="submit"
      className={`${styles.button} ${styles.secondaryColor}`}
      aria-label={label}
      title={label}
    >
      stop
    </button>
  );
}

export default StopButton;
