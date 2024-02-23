import { useState } from "react";
import styles from "./cs-special.module.css";
import DraggableInputs from "./draggable-inputs";
import { Link } from "react-router-dom";

export default function (): JSX.Element {
  const [dragActive, setDragActive] = useState(false);
  const [dragCount, setDragCount] = useState(0);

  const [isInvalid, setIsInvalid] = useState(false);
  const [visited, setVisited] = useState(0);
  const [checkClicked, setCheckClicked] = useState(false);

  const [dragId, setDragId] = useState(-1);
  const [dragContent, setDragContent] = useState("");

  const dragEnterHandler = (event: React.DragEvent) => {
    event.preventDefault();

    setDragCount((prevCount: number): number => prevCount + 1);
  };

  const dragLeaveHandler = (event: React.DragEvent) => {
    event.preventDefault();

    setDragCount((prevCount: number): number => prevCount - 1);
  };

  const dragOverHandler = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const dropHandler = (event: React.DragEvent) => {
    event.preventDefault();
    setDragCount(0);

    const content = dragContent;
    const id = dragId;

    const target = event.target as HTMLDivElement;
    const targetId = target.id;

    if (targetId !== id.toString()) {
      setIsInvalid(true);
    }

    if (target.innerText) {
      target.innerText = "";
    }

    target.insertAdjacentText("beforeend", content);
    setVisited((visited) => visited + 1);

    target.classList.remove(styles.code__droppable);
  };

  return (
    <>
      <div className={styles.main__container}>
        <div className={""}>
          <div className={styles.code__title}>Code Snippet</div>
          <div className={styles.code__section}>
            <div className={styles.code__line}>{"int main() {"}</div>
            <div className={styles.code__line}>
              <span className={styles.tab__space}></span>
              {"int a = b = 1;"}
            </div>
            <div
              id="1"
              className={`${styles.code__line} ${styles.code__droppable}`}
              onDragOver={dragOverHandler}
              onDragEnter={dragEnterHandler}
              onDragLeave={dragLeaveHandler}
              onDrop={dropHandler}
            >
              <span className={styles.tab__space}></span>{" "}
            </div>
            <div className={styles.code__line}>
              <span className={styles.tab__space}></span>
              {"if(sum > 2) {"}
            </div>
            <div className={styles.code__line}>
              <span className={styles.tab__space}></span>{" "}
              <span className={styles.tab__space}></span>{" "}
              {"printf('Bad Move');"}
            </div>
            <div className={styles.code__line}>
              <span className={styles.tab__space}></span>{" "}
              <span className={styles.tab__space}></span> {"return -1;"}
            </div>
            <div className={styles.code__line}>
              <span className={styles.tab__space}></span>
              {"}"}
            </div>

            <div className={styles.code__line}>
              <span className={styles.tab__space}></span>
              {"for(int i = 0; i <= sum; i++) {"}
            </div>
            <div
              id="2"
              className={`${styles.code__line} ${styles.code__droppable}`}
              onDragOver={dragOverHandler}
              onDragEnter={dragEnterHandler}
              onDragLeave={dragLeaveHandler}
              onDrop={dropHandler}
            >
              <span className={styles.tab__space}></span>
              <span className={styles.tab__space}></span>
            </div>
            <div className={styles.code__line}>
              <span className={styles.tab__space}></span>
              {"}"}
            </div>

            <div className={styles.code__line}>
              <span className={styles.tab__space}></span>
              {"return 1;"}
            </div>

            <div className={styles.code__line}>{"}"}</div>
          </div>
        </div>

        <div className={styles.sub__container}>
          <div>
            <div className={styles.sub__title}>Blocks</div>

            <div className={styles.blocks__container}>
              <DraggableInputs
                content="printf('%d', i);"
                id={2}
                setDragContent={setDragContent}
                setDragId={setDragId}
              />
              <DraggableInputs
                content="int sum = a + b;"
                id={1}
                setDragContent={setDragContent}
                setDragId={setDragId}
              />
            </div>
          </div>

          <div>
            <div className={styles.sub__title}>Expected Output</div>

            <div className={styles.output__container}>
              <div>0</div>
              <div>1</div>
              <div>2</div>
            </div>
          </div>

          <div className={styles.btn__container}>
            <button
              className={`${styles.btn} ${styles.btn__reset}`}
              onClick={() => {
                window.location.reload();
              }}
            >
              Reset
            </button>
            {!checkClicked && (
              <button
                className={`${styles.btn} ${styles.btn__continue}`}
                onClick={() => {
                  setCheckClicked(true);
                }}
              >
                Continue
              </button>
            )}

            {checkClicked &&
              (!isInvalid && visited === 2 ? (
                <></>
              ) : (
                <div className={styles.invalid__message}>Order is invalid!</div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
