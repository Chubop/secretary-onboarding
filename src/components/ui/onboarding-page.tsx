import clsx from "clsx";

type OnboardingPageProps = {
  children?: React.ReactNode; // This allows any valid React node including arrays of elements
  title: string;
  gradientTitle?: boolean;
  description: string;
  extra?: React.ReactNode;
};

const OnboardingPage: React.FC<OnboardingPageProps> = ({
  children,
  title,
  gradientTitle,
  description,
  extra,
}: OnboardingPageProps) => {
  return (
    <div className="text-center space-y-2 items-center justify-center align-middle">
      <div
        className={clsx(
          "text-4xl font-bold",
          gradientTitle && "purple-gradient-font"
        )}
      >
        {title}
      </div>
      <div className="text-xl max-w-3xl mx-auto">{description}</div>
      <div className="px-24 py-12 shadow-inner border border-neutral-200 rounded-3xl">
        {children}
      </div>
      <div>{extra}</div>
    </div>
  );
};

export default OnboardingPage;
