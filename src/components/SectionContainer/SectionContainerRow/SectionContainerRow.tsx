import "./SectionContainerRow.scss";

interface ISectionContainerRow {
  customClass?: string;
  children: string | JSX.Element | JSX.Element[];
  title: string;
}

function SectionContainerRow({
  customClass,
  children,
  title,
}: ISectionContainerRow) {
  return (
    <div className={`sectionContainerRow ${customClass}`}>
      <div className="sectionContainerRow__title">{title}</div>
      <div className="sectionContainerRow__body">{children}</div>
    </div>
  );
}

export default SectionContainerRow;
