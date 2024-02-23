import Image from "next/image";
import OnboardingLayout from "./ui/onboarding-layout";

export default function Splash() {
  return (
    <>
      <OnboardingLayout>
        <Image
          width={200}
          height={200}
          src="https://i.imgur.com/Qccsash.png"
          alt="logo"
        />
        <div>
          <span className="text-6xl font-bold">Welcome to Secretary</span>
        </div>
        <div>
          <span className="text-2xl w-[32rem]">
            Secretary converts calls, meetings, and voice memos into private
            streams using AI.
          </span>
        </div>
      </OnboardingLayout>
    </>
  );
}
