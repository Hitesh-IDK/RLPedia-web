import styles from "./domain-section.module.css";

export default function ({
  icon,
  name,
  desc,
}: {
  icon: any;
  name: string;
  desc: string;
}): JSX.Element {
  return (
    <>
      <div className={styles.main__container}>
        <div className={styles.details__section}>
          <img alt="Icon" src={icon} className={styles.img__icon} />
          <div className={styles.domain__name}>{name}</div>
          <div className={styles.domain__desc}>{desc}</div>
        </div>
      </div>
    </>
  );
}
