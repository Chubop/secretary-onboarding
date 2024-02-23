import OnboardingPage from "./ui/onboarding-page";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function AudioFirst() {
  const title = "Audio First Design";
  const description =
    "Secretary can securely listen live or you can add audio of any kind. Use our built-in recorder, or upload an existing file.";
  return (
    <OnboardingPage title={title} description={description}>
      <Tilt>
        <div className="flex space-x-48 justify-center items-center">
          <Image
            src="/svg/sound-wave.svg"
            alt="Recorder"
            width={200}
            height={120}
          />
          <Image
            src="/svg/headphones.svg"
            alt="Get Next Steps"
            width={200}
            height={50}
          />
        </div>
      </Tilt>
    </OnboardingPage>
  );
}
