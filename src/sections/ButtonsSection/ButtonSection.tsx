import "./ButtonSection.scss";

interface IButtonSection {
  customClass?: string;
  children: string | JSX.Element | JSX.Element[];
}

function ButtonSection({ customClass, children }: IButtonSection) {
  return <div className={`buttonSection ${customClass}`}>{children}</div>;
}

export default ButtonSection;
