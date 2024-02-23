import OnboardingPage from "./ui/onboarding-page";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function PromptsAndActions() {
  const title = "Prompts & Smart Actions";
  const description =
    "Secretary keeps up with your action items, meeting minutes, summaries and answers.";
  return (
    <OnboardingPage title={title} description={description}>
      <Tilt>
        <div className="flex space-x-4 justify-center items-center">
          <Image
            src="/svg/recorder.svg"
            alt="Recorder"
            width={300}
            height={120}
          />
          <Image src="/svg/arrow.svg" alt="Arrow" width={50} height={50} />
          <Image
            src="/svg/get-next-steps.svg"
            alt="Get Next Steps"
            width={300}
            height={50}
          />
          <Image src="/svg/arrow.svg" alt="Arrow" width={50} height={50} />
          <div className="w-72 italic flex items-center justify-center h-full text-2xl text-left text-neutral-500">
            {
              "\"In tomorrow's meeting, the team will focus on finalizing the new feature's design, ensuring all UI elements align with the updated style guide...\""
            }
          </div>
        </div>
      </Tilt>
    </OnboardingPage>
  );
}
