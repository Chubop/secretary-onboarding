interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  arrow: string;
}

const BaseNavButton = ({ arrow, ...props }: NavButtonProps) => {
  return (
    <button
      {...props}
      className="text-4xl text-neutral-300 hover:text-neutral-200 active:text-neutral-400 transition-all"
    >
      {arrow}
    </button>
  );
};

export const BackButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <BaseNavButton {...props} arrow="←" />;
};

export const NextButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <BaseNavButton {...props} arrow="→" />;
};
