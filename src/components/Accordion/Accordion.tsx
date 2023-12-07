import "./Accordion.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface AccordionProps {
  children: string | JSX.Element | JSX.Element[];
  title: string;
  customClass?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  customClass,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${customClass || ""}`}>
      <div
        className="accordion__header"
        onClick={toggleAccordion}
        style={{ cursor: "pointer" }}
      >
        <div>{title}</div>
        {isOpen ? (
          <FontAwesomeIcon
            className="accordion__headerArrow"
            icon={faChevronUp}
          />
        ) : (
          <FontAwesomeIcon
            className="accordion__headerArrow"
            icon={faChevronDown}
          />
        )}
      </div>
      <div className={`${isOpen ? "open" : "closed"}`}>
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
