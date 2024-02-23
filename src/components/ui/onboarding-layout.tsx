type OnboardingLayoutProps = {
  children: React.ReactNode; // This allows any valid React node including arrays of elements
};

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 fade-in">
      {children}
    </div>
  );
};
export default OnboardingLayout;
