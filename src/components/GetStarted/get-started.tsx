import ProgressBar from "./progress-bar";

import styles from "./get-started.module.css";

export default function (): JSX.Element {
  return (
    <>
      <div className={styles.main__container}>
        <ProgressBar />

        <div>Which describes you best</div>
        <div>This will help us personalize your experience.</div>

        <div>Options</div>
      </div>
    </>
  );
}
