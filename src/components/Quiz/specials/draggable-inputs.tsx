import { Dispatch } from "react";
import styles from "./draggable-inputs.module.css";

export default function ({
  content,
  id,
  setDragId,
  setDragContent,
}: {
  content: string;
  id: number;
  setDragContent: Dispatch<string>;
  setDragId: Dispatch<number>;
}): JSX.Element {
  return (
    <>
      <div
        className={styles.draggable__content}
        draggable
        onDragStart={() => {
          setDragId(id);
          setDragContent(content);
        }}
        onDragEnd={() => {
          setDragId(-1);
          setDragContent("");
        }}
      >{`${content}`}</div>
    </>
  );
}
