import DomainSection, { StageData } from "../components/Domain/domain-section";
import coding from "./../public/icons/coding.gif"

export default function (): JSX.Element {
const stageData:StageData[] = [
  {name: "Computational Thinking", description: "Build solid foundations for computational problem solving."},
  {name: "The Building Blocks", description: "Discover the core principles of chemistry and physics"},
  {name: "Algorithms", description: "Design algorithms and data structures that make your programs more effective."}
]


  return (
    <>
      <DomainSection name="Computer Science" icon={coding} desc="Develop skills in programming and algorithmic thinking" stageData={stageData}/>
    </>
  );
}
