import styles from "./started-option.module.css";

export default function ({
  content,
  icon,
}: {
  content: string;
  icon: any;
}): JSX.Element {
  return (
    <>
      <div className={styles.content__container}>
        <img src={icon} alt="Icon" className={styles.img__icon} />
        {content}
      </div>
    </>
  );
}
