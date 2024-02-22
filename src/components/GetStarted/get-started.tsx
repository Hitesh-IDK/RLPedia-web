import ProgressBar from "./progress-bar";

import styles from "./get-started.module.css";
import StartedOption from "./started-option";
import AboutUser from "./sections/about-user";
import InterestUser from "./sections/interest-user";
import { useState } from "react";
import Midpoint from "./sections/midpoint";

export default function (): JSX.Element {
  const [clickCounter, setClickCounter] = useState(2);

  const numberOfSlides = [
    <AboutUser setClickCounter={setClickCounter} />,
    <InterestUser setClickCounter={setClickCounter} />,
    <Midpoint setClickCounter={setClickCounter} />,
  ];

  return (
    <>
      <div className={styles.main__container}>
        <ProgressBar value={clickCounter} maxValue={numberOfSlides.length} />

        <div className={styles.sub__container}>
          {numberOfSlides[clickCounter]}
        </div>
      </div>
    </>
  );
}
