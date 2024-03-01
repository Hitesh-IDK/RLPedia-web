import styles from "./track-instance.module.css";

import podium from "../../public/images/podium.png";
import purpleLineClockwise from "../../public/icons/purple-line-clockwise.png";
import { useNavigate } from "react-router-dom";

export default function ({
  icon,
  name,
  stage,
}: {
  icon: any;
  name: string;
  stage: number;
}): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.main__container}>
        <div className={styles.details__section}>
          <img src={icon} alt="Course" className={styles.img__course} />
          <div className={styles.track__stage}>
            <span className={styles.track__name}>{name}</span> - Stage {stage}
          </div>
          <div className={styles.track__desc}>
            Open your eyes to the world around you by solving puzzles with
            science.
          </div>

          <div className={styles.podium__section}>
            <img src={podium} alt="Section" className={styles.img__podium} />
            <div>5 Sections</div>
          </div>
        </div>

        <div className={styles.sections}>
          <div
            className={`${styles.section__container} ${styles.section__container_complete}`}
          >
            <img
              src={podium}
              alt="Podium"
              className={styles.img__section_podium}
            />
            <div>Section 1</div>
          </div>
          <div
            className={`${styles.section__container} ${styles.section__container_active}`}
          >
            <img
              src={podium}
              alt="Podium"
              className={styles.img__section_podium}
            />
            <div>Section 2</div>
          </div>
          <div className={styles.section__container}>
            <img
              src={podium}
              alt="Podium"
              className={styles.img__section_podium}
            />
            <div>Section 3</div>
          </div>
          <div className={styles.section__container}>
            <img
              src={podium}
              alt="Podium"
              className={styles.img__section_podium}
            />
            <div>Section 4</div>
          </div>
          <div
            className={styles.section__container}
            onClick={() => {
              navigate("/test");
            }}
          >
            <img
              src={podium}
              alt="Podium"
              className={styles.img__section_podium}
            />
            <div>Section 5</div>
          </div>
        </div>
      </div>
    </>
  );
}
