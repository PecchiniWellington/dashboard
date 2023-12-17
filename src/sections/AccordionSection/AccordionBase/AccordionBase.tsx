import Accordion from "../../../components/Accordion/Accordion";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";

function AccordionBase() {
  return (
    <>
      <SectionContainerRow title="normal" direction="column">
        <div>
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
        </div>
      </SectionContainerRow>
    </>
  );
}

export default AccordionBase;
