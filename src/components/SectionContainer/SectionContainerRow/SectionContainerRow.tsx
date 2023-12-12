import "./SectionContainerRow.scss";

interface ISectionContainerRow {
  customClass?: string;
  children: string | JSX.Element | JSX.Element[];
  title: string;
  direction?: string;
}

function SectionContainerRow({
  customClass,
  children,
  title,
  direction = "row",
}: ISectionContainerRow) {
  return (
    <div className={`sectionContainerRow ${customClass}`}>
      <div className="sectionContainerRow__title">{title}</div>
      <div
        className="sectionContainerRow__body"
        style={{ flexDirection: direction }}
      >
        {children}
      </div>
    </div>
  );
}

export default SectionContainerRow;
