import ProgressBar from "./progress-bar";

import styles from "./get-started.module.css";
import StartedOption from "./started-option";

export default function (): JSX.Element {
  return (
    <>
      <div className={styles.main__container}>
        <ProgressBar value={5} maxValue={10} />

        <div className={styles.sub__container}>
          <div className={styles.main__title}>Which describes you best</div>
          <div className={styles.title__desc}>
            This will help us personalize your experience.
          </div>

          <div>
            <StartedOption content="Student or Soon to be enrolled" />
            <StartedOption content="Student or Soon to be enrolled" />
            <StartedOption content="Student or Soon to be enrolled" />
            <StartedOption content="Student or Soon to be enrolled" />
          </div>
        </div>
      </div>
    </>
  );
}
