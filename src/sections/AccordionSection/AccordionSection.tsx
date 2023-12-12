import AccordionBase from "./AccordionBase/AccordionBase";
import "./AccordionSection.scss";

interface IAccordionSection {
  customClass?: string;
}

function AccordionSection({ customClass }: IAccordionSection) {
  return (
    <div className={`accordionSection ${customClass}`}>
      <AccordionBase></AccordionBase>
    </div>
  );
}

export default AccordionSection;
