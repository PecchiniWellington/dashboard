import "./Input.scss";
import { ChangeEventHandler, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface IInput {
  value: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  name?: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  icon?: IconProp;
  disabled?: boolean;
}

function Input({
  value,
  handleChange,
  placeholder = "inserisci valore",
  required = false,
  type = "text",
  name,
  icon,
  disabled,
}: IInput) {
  const [showPassword, setShowPassword] = useState(false);
  const [typePassword, setTypePassword] = useState("password");

  const onChangeTypePassword = () => {
    setShowPassword(!showPassword);
    typePassword === "password"
      ? setTypePassword("text")
      : setTypePassword("password");
  };
  return (
    <div className="vot__customInput">
      <input
        disabled={disabled}
        name={name}
        className="vot__customInputField"
        type={type === "password" ? typePassword : type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
      ></input>
      {type === "password" && (
        <FontAwesomeIcon
          className="vot__customInputIconPassword"
          icon={showPassword ? faEye : faEyeSlash}
          onClick={onChangeTypePassword}
        />
      )}

      {icon && <FontAwesomeIcon className="vot__customInputIcon" icon={icon} />}
    </div>
  );
}

export default Input;
