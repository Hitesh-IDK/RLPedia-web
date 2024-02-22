import QuizInstance from "../components/Quiz/quiz-instance";
import TrackInstance from "../components/Track/track-instance";

import scientificThinking from "../public/icons/science.gif";

export default function (): JSX.Element {
  return (
    <>
      <TrackInstance
        icon={scientificThinking}
        name="Scientific Thinking"
        stage={1}
      />
    </>
  );
}
