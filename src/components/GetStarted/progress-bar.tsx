import styles from "./progress-bar.module.css";

export default function ({
  value,
  maxValue,
}: {
  value: number;
  maxValue: number;
}): JSX.Element {
  return (
    <>
      <div className={styles.bar}>
        Bar
        <div
          className={styles.filled_bar}
          style={{
            width: `${(value / maxValue) * 100}%`,
            transition: "all 1s ease-in-out",
          }}
        >
          Filled Bar
        </div>
      </div>
    </>
  );
}
