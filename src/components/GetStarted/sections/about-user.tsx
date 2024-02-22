import StartedOption from "../started-option";
import studentIcon from "../../../public/icons/graduation-cap-solid.svg";
import professionIcon from "../../../public/icons/user-tie-solid.svg";
import parentIcon from "../../../public/icons/hand-holding-hand-solid.svg";
import teacherIcon from "../../../public/icons/chalkboard-user-solid.svg";
import styles from "./about-user.module.css";

export default function (): JSX.Element {
  return (
    <>
      <div className={styles.main__title}>Which describes you best</div>
      <div className={styles.title__desc}>
        This will help us personalize your experience.
      </div>

      <div className={styles.options__container}>
        <StartedOption
          content="Student or Soon to be enrolled"
          icon={studentIcon}
        />
        <StartedOption
          content="Professional Pursuing a Career"
          icon={professionIcon}
        />
        <StartedOption
          content="Parent of a School aged child"
          icon={parentIcon}
        />
        <StartedOption content="Professor or Teacher" icon={teacherIcon} />
      </div>
    </>
  );
}
