import "./Section.scss";

interface ISections {
  customClass?: string;
  children: string | JSX.Element | JSX.Element[];
}

function Section({ customClass, children }: ISections) {
  return <div className={`sections ${customClass}`}>{children}</div>;
}

export default Section;
