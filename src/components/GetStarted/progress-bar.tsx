import styles from "./progress-bar.module.css";

export default function (): JSX.Element {
  return (
    <>
      <div className={styles.bar}>
        Bar
        <div className={styles.filled_bar}>Filled Bar</div>
      </div>
    </>
  );
}
