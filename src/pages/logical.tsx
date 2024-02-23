import DomainSection, { StageData } from "../components/Domain/domain-section";
import logical from "./../public/icons/Logic.gif.gif"

export default function (): JSX.Element {
const stageData:StageData[] = [
  {name: "Logic", description: "syntax and semantics of formal models of deductive and inductive inference"},
  {name: "Joy of Problem Solving", description: "an online course that explores four mathematical explorations."},
  {name: "Logic II", description: "Logic II is a course in formal logic, or the logic that pertains to pure reasoning in the abstract "}
]


  return (
    <>
      <DomainSection name="Logic" icon={logical} desc="Stretch your analytic muscles with truth-tellers, liars, logical robots, and more." stageData={stageData}/>
    </>
  );
}
