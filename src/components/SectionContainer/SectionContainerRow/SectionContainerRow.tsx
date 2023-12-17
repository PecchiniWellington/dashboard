import "./SectionContainerRow.scss";

interface ISectionContainerRow {
  customClass?: string;
  children: string | JSX.Element | JSX.Element[];
  title: string;
  direction?: string;
  space?: number;
}

function SectionContainerRow({
  customClass,
  children,
  title,
  direction = "row",
  space = 0,
}: ISectionContainerRow) {
  return (
    <div className={`sectionContainerRow ${customClass}`}>
      <div className="sectionContainerRow__title">{title}</div>
      <div className="sectionContainerRow__body">{children}</div>
    </div>
  );
}

export default SectionContainerRow;
