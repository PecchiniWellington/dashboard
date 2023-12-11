import { CSSProperties } from "react";
import "./Button.scss";
import Spinner from "../../Spinner/Spinner";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IButton {
  dispatchEvent?: (e: any) => void;
  children: string | JSX.Element | JSX.Element[];
  projectType?: string;
  customClass?: string;
  customStyle?: CSSProperties | undefined;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  active?: boolean;
  asyncButton?: boolean;
  preIcon?: any;
  postIcon?: any;
}

function Button({
  dispatchEvent,
  children,
  customClass,
  projectType,
  customStyle,
  type,
  disabled = false,
  active = false,
  asyncButton = false,
  preIcon,
  postIcon,
}: IButton) {
  const disabledBtn = disabled ? "disabled" : "";
  const activeBtn = active ? "active" : "";

  return (
    <button
      style={customStyle}
      type={type}
      disabled={disabled}
      className={`button ${customClass || ""} ${projectType}${
        disabledBtn || activeBtn
      }`}
      onClick={dispatchEvent}
    >
      {asyncButton && <Spinner size={15} />}
      {preIcon}
      {children}
      {postIcon}
    </button>
  );
}

export default Button;
