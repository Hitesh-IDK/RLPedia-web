import StartedOption from "../started-option";
import studentIcon from "../../../public/icons/graduation-cap-solid.svg";
import professionIcon from "../../../public/icons/user-tie-solid.svg";
import parentIcon from "../../../public/icons/hand-holding-hand-solid.svg";
import teacherIcon from "../../../public/icons/chalkboard-user-solid.svg";
import styles from "./section.module.css";
import { Dispatch, SetStateAction } from "react";

export default function ({
  setClickCounter,
}: {
  setClickCounter: Dispatch<SetStateAction<number>>;
}): JSX.Element {
  return (
    <>
      <div className={styles.main__title}>
        Which are you most interested in?
      </div>
      <div className={styles.title__desc}>
        This will help us personalize your experience.
      </div>

      <div className={styles.options__container}>
        <StartedOption
          content="Learning Specific Skills to advance my Career"
          icon={studentIcon}
          clickHandler={() => {
            setClickCounter((prevCount) => prevCount + 1);
          }}
        />
        <StartedOption
          content="Explore new topics"
          icon={professionIcon}
          clickHandler={() => {
            setClickCounter((prevCount) => prevCount + 1);
          }}
        />
        <StartedOption
          content="Exercising my brain to stay sharp"
          icon={parentIcon}
          clickHandler={() => {
            setClickCounter((prevCount) => prevCount + 1);
          }}
        />
        {/* <StartedOption content="Professor or Teacher" icon={teacherIcon} /> */}
      </div>
    </>
  );
}
