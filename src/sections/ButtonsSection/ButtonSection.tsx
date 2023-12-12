import Section from "../Section";
import ButtonsAsync from "./ButtonAsync/ButtonsAsync";
import ButtonsBase from "./ButtonsBase/ButtonsBase";
import ButtonsIcons from "./ButtonsIcons/ButtonsIcons";

function ButtonSection() {
  return (
    <Section>
      <ButtonsBase />
      <ButtonsAsync />
      <ButtonsIcons />
    </Section>
  );
}

export default ButtonSection;
