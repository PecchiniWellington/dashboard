import ButtonsAsync from "./ButtonAsync/ButtonsAsync";
import "./ButtonSection.scss";
import ButtonsBase from "./ButtonsBase/ButtonsBase";
import ButtonsIcons from "./ButtonsIcons/ButtonsIcons";

interface IButtonSection {
  customClass?: string;
}

function ButtonSection({ customClass }: IButtonSection) {
  return (
    <div className={`buttonSection ${customClass}`}>
      <ButtonsBase />
      <ButtonsAsync />
      <ButtonsIcons />
    </div>
  );
}

export default ButtonSection;
