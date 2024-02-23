import DomainSection, { StageData } from "../components/Domain/domain-section";
import scientificIcon from "../public/icons/science.gif";

export default function (): JSX.Element {
const stageData:StageData[] = [
  {name: "Foundation", description: "Starting seeing the world around you like a scientist"},
  {name: "Chemistry and Physics", description: "Discover the core principles of chemistry and physics"},
  {name: "Advanced Physics", description: ""}
]


  return (
    <>
      <DomainSection name="Scientific Thinking" icon={scientificIcon} desc="Master key scientific ideas & technologies of the future" stageData={stageData}/>
    </>
  );
}
