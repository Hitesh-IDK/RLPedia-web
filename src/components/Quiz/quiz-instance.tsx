import styles from "./quiz-instance.module.css";
import QuizOption from "./quiz-option";

export default function (): JSX.Element {
  return (
    <>
      <div className={styles.main__container}>
        <div className={styles.quiz__container}>
          <div className={styles.question}>
            Which of the following loops in C is used when the number of
            iterations is known beforehand?
          </div>
          <div className={styles.options__container}>
            <QuizOption option="for loop" />
            <QuizOption option="While Loop" />
            <QuizOption option="do while loop" />
            <QuizOption option="switch loop" />
          </div>
        </div>
      </div>
    </>
  );
}
