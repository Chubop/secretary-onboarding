import OnboardingPage from "./ui/onboarding-page";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function Streams() {
  const title = "Streams";
  const description =
    "Streams are like chats, but persistent. They get better at understanding context over time and accept all sorts of information.";

  const size = 300;
  const filterStyle = `drop-shadow(${0} ${2}px ${2}px rgba(0, 0, 0, ${0.1}))`;
  const extra = () => {
    return (
      <div className="text-2xl">
        You get{" "}
        <span className="purple-gradient-font">three free streams </span>
        to start.
      </div>
    );
  };
  return (
    <OnboardingPage title={title} description={description} extra={extra()}>
      <Tilt>
        <div className="flex flex-col space-y-8 justify-center items-center">
          <Image
            style={{ filter: filterStyle }}
            src="/svg/marlon-stream.svg"
            alt="marlon"
            width={size}
            height={size}
          />

          <Image
            style={{ filter: filterStyle }}
            src="/svg/history-stream.svg"
            alt="history"
            width={size}
            height={size}
          />

          <Image
            style={{ filter: filterStyle }}
            src="/svg/spain-stream.svg"
            alt="spain"
            width={size}
            height={size}
          />
        </div>
      </Tilt>
    </OnboardingPage>
  );
}
