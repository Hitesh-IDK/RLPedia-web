import DomainSection, { StageData } from "../components/Domain/domain-section";
import data from "./../public/icons/Data analysis .gif"

export default function (): JSX.Element {
const stageData:StageData[] = [
  {name: "Data Foundations", description: "Generate data summaries and visualizations"},
  {name: "Probability for Predictions", description: "Build a framework to model random events"},
  {name: "Neural Networks", description: "Understand the inner workings of neural networks"}
]


  return (
    <>
      <DomainSection name="Data Analysis" icon={data} desc="Master key skills in probability and data analysis" stageData={stageData}/>
    </>
  );
}
