import styles from "./section.module.css";
import specificStyles from "./midpoint.module.css";
import motivationGif from "../../../public/images/motivation.gif";

import { Dispatch, SetStateAction } from "react";

export default function ({
  setClickCounter,
}: {
  setClickCounter: Dispatch<SetStateAction<number>>;
}): JSX.Element {
  return (
    <>
      <div className={specificStyles.main__container}>
        <img src={motivationGif} alt="Motivation Gif" />
        <div>
          <div className={specificStyles.main__title}>
            You are in the right place
          </div>

          <div className={specificStyles.main__desc}>
            RLPedia gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in computer science, logic and analysis.
          </div>
        </div>

        <button
          className={specificStyles.btn__continue}
          onClick={() => {
            setClickCounter((prevCount) => prevCount + 1);
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
}
