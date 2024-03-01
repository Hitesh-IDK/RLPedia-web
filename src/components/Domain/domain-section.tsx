import styles from "./domain-section.module.css";
import science from "../../public/icons/science.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Section from "../../pages/section";
import TrackInstance from "../Track/track-instance";

export interface StageData {
  name: string;
  description: string;
}

export default function ({
  icon,
  name,
  desc,
  stageData,
}: {
  icon: any;
  name: string;
  desc: string;
  stageData: StageData[];
}): JSX.Element {
  const [sectionClicked, setSectionClicked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const navigate = useNavigate();

  const getQuestions = async () => {
    // const response = await fetch("http://localhost:8666/questions");
    // const resData = await response.json();
    // console.log(resData);
    // if (!response.ok) return;
    // localStorage.setItem("questions", JSON.stringify(resData));
  };

  useEffect(() => {
    setIsMounted(true);

    if (!isMounted) return;

    const storedData = localStorage.getItem("questions");

    if (storedData) return;

    getQuestions();
  });

  return (
    <>
      {!sectionClicked ? (
        <>
          <div className="stage">
            <div className="card col-md-3">
              <img src={icon} className="icon" alt="" />
              <p>YOUR LEARNING PATH</p>
              <h3>{name}</h3>
              <p>{desc}</p>
            </div>

            <div className=" my-5">
              <div className="row gap-5 stage-container">
                <div
                  className="col-4 stagecards card-active"
                  role="button"
                  onClick={() => {
                    setSectionClicked(true);
                  }}
                >
                  <h5>Level 1</h5>
                  <h2>{stageData[0].name}</h2>
                  <p>{stageData[0].description}</p>
                </div>
                <div className="col-4 stagecards" role="button">
                  <h5>Level 2</h5>
                  <h2>{stageData[1].name}</h2>
                  <p>{stageData[1].description}</p>
                </div>
                <div className="col-4 stagecards " role="button">
                  <h5>Level 3</h5>
                  <h2>{stageData[2].name}</h2>
                  <p>{stageData[2].description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <TrackInstance icon={icon} name={name} stage={1} />
        </>
      )}
    </>
  );
}
