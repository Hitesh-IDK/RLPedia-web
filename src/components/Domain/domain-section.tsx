import styles from "./domain-section.module.css";
import science from "../../public/icons/science.gif"

export interface StageData {
  name: string;
  description: string;
}

export default function ({
  icon,
  name,
  desc,
  stageData
}: {
  icon: any;
  name: string;
  desc: string;
  stageData: StageData[]
}): JSX.Element {

    console.log(stageData);
    
  return (
    <>
     <div className="stage">
      <div className="card col-md-3">
        <img src={icon} className="icon" alt="" />
        <p>YOUR LEARNING PATH</p>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
  
      <div className=" my-5 ">
        <div className="row gap-5 stage-container">
          <div className="col-4 stagecards card-active">
            <h5>Level 1</h5>
            <h2>{stageData[0].name}</h2>
            <p>{stageData[0].description}</p>
          </div>
          <div className="col-4 stagecards ">
          <h5>Level 2</h5>
          <h2>{stageData[1].name}</h2>
            <p>{stageData[1].description}</p>
          </div>
          <div className="col-4 stagecards ">
            <h5>Level 3</h5>
            <h2>{stageData[2].name}</h2>
            <p>{stageData[2].description}</p></div>
        </div>
      </div>
    
      </div>
      
    </>
  );
}
