import Accordion from "../../../components/Accordion/Accordion";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";
import "./AccordionBase.scss";

interface IAccordionBase {
  customClass?: string;
}

function AccordionBase({ customClass, children }: IAccordionBase) {
  return (
    <div className={`accordionBase ${customClass}`}>
      <SectionContainer
        title="Button filled"
        description="Bottoni based riempiti"
      >
        <SectionContainerRow title="normal" direction="column">
          <Accordion title="Accordion Item#1">
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quas quasi, odio magnam nihil molestiae quidem eius
              repudiandae, velit a error ratione veritatis dignissimos.
              Explicabo similique dolores quis ut dolor?
            </div>
          </Accordion>
          <Accordion title="Accordion Item#2">
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quas quasi, odio magnam nihil molestiae quidem eius
              repudiandae, velit a error ratione veritatis dignissimos.
              Explicabo similique dolores quis ut dolor?
            </div>
          </Accordion>
          <Accordion title="Accordion Item#3">
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quas quasi, odio magnam nihil molestiae quidem eius
              repudiandae, velit a error ratione veritatis dignissimos.
              Explicabo similique dolores quis ut dolor?
            </div>
          </Accordion>
        </SectionContainerRow>
      </SectionContainer>
    </div>
  );
}

export default AccordionBase;
