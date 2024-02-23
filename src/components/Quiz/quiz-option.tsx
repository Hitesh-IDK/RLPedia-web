import styles from "./quiz-option.module.css";

export default function ({ option }: { option: string }): JSX.Element {
  return (
    <>
      <div className={styles.option__container}>{option}</div>
    </>
  );
}
