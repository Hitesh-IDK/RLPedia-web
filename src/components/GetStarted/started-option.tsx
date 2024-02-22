import styles from "./started-option.module.css";

export default function ({
  content,
  icon,
  clickHandler,
}: {
  content: string;
  icon: any;
  clickHandler: () => void;
}): JSX.Element {
  return (
    <>
      <div className={styles.content__container} onClick={clickHandler}>
        <img src={icon} alt="Icon" className={styles.img__icon} />
        {content}
      </div>
    </>
  );
}
