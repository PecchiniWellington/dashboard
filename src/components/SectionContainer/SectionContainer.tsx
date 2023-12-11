import "./SectionContainer.scss";

interface ISectionContainer {
  customClass?: string;
  children: string | JSX.Element | JSX.Element[];
  title: string;
  description: string;
}

function SectionContainer({
  customClass,
  children,
  title,
  description,
}: ISectionContainer) {
  return (
    <div className={`sectionContainer ${customClass}`}>
      <div className="sectionContainer__title">{title}</div>
      <span className="sectionContainer__description">{description}</span>

      <div className="sectionContainer__body">{children}</div>
    </div>
  );
}

export default SectionContainer;
