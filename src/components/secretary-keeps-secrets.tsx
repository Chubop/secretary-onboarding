import OnboardingPage from "./ui/onboarding-page";
import Image from "next/image";

export default function SecretaryKeepsSecrets() {
  const title = "Secretary Keeps Secrets";
  const description =
    "Secretary keeps your secrets so that you can use AI freely across work and life. Click the lock icons to protect the data so you can use AI freely.";
  return (
    <OnboardingPage title={title} description={description}>
      <div className="flex flex-col space-y-12 justify-center items-center max-w-3xl text-2xl">
        <div>
          <span className="font-bold text-red-theme">John Bradford </span>
          <span>
            told the partner about the product launch a bit too early so we’ll
            need to manage communications.”
          </span>
        </div>
        <Image src="/svg/lock.svg" alt="Recorder" width={50} height={120} />
        <div>
          <span className="font-bold text-blue-theme">Person A </span>
          <span>
            told the partner about the product launch a bit too early so we’ll
            need to manage communications.”
          </span>
        </div>
      </div>
    </OnboardingPage>
  );
}
