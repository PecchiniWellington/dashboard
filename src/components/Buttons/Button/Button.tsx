import { CSSProperties } from "react";
import "./Button.scss";
import Spinner from "../../Spinner/Spinner";

interface IButton {
  dispatchEvent?: (e: any) => void;
  children: string | JSX.Element | JSX.Element[];
  projectType?: string;
  customClass?: string;
  customStyle?: CSSProperties | undefined;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  asyncButton?: boolean;
}

function Button({
  dispatchEvent,
  children,
  customClass,
  projectType,
  customStyle,
  type,
  disabled,
  asyncButton = false,
}: IButton) {
  return (
    <button
      style={customStyle}
      type={type}
      disabled={disabled}
      className={`vot__button ${customClass || ""} ${projectType}`}
      onClick={dispatchEvent}
    >
      {asyncButton && <Spinner size={15} />}

      {children}
    </button>
  );
}

export default Button;
