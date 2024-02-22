import ProgressBar from "./progress-bar";

import styles from "./get-started.module.css";
import StartedOption from "./started-option";
import AboutUser from "./sections/about-user";

export default function (): JSX.Element {
  return (
    <>
      <div className={styles.main__container}>
        <ProgressBar value={5} maxValue={10} />

        <div className={styles.sub__container}>
          <AboutUser />
        </div>
      </div>
    </>
  );
}
