import "./Modal.scss";
import ReactDom from "react-dom";
import Button from "../Buttons/Button/Button";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

interface IModal {
  children: string | JSX.Element | JSX.Element[];
  onClose: () => void;
  title?: string;
  customClass?: string;
  id: string;
}

export default function Modal({
  children,
  onClose,
  title = "Titolo",
  customClass,
  id,
}: IModal) {
  const { openModal } = useSelector((state) => state.utils);
  if (id !== openModal) return null;

  return ReactDom.createPortal(
    <>
      <div className="vot__overlay" />
      <div className={`vot__modal ${customClass}`}>
        <div className="vot__modalHeader">
          <h1 className="vot__modalHeaderTitle">{title}</h1>
          <Button
            customClass="vot__modalHeaderButton"
            type="button"
            projectType="empty"
            dispatchEvent={onClose}
          >
            <FontAwesomeIcon icon={faClose} />
          </Button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
