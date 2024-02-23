type OnboardingButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const OnboardingButton: React.FC<OnboardingButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`shadow-md hover:shadow-lg active:shadow-lg relative btn-gradient text-xl py-5 px-48 rounded-[3rem] bg-orange-200 overflow-hidden ${
        props.className || ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default OnboardingButton;
