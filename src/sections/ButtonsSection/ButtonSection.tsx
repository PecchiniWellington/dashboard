import SectionContainer from "../../components/SectionContainer/SectionContainer";
import ButtonsAsync from "./ButtonAsync/ButtonsAsync";
import ButtonsBase from "./ButtonsBase/ButtonsBase";
import ButtonsIconsPost from "./ButtonsIconsPost/ButtonsIconsPost";
import ButtonsIconsPre from "./ButtonsIconsPre/ButtonsIconsPre";

function ButtonSection() {
  return (
    <>
      <SectionContainer
        title="Button filled"
        description="Bottoni based riempiti"
      >
        <ButtonsBase />
      </SectionContainer>
      <SectionContainer
        title="Button filled"
        description="Bottoni based riempiti"
      >
        <ButtonsAsync />
      </SectionContainer>
      <SectionContainer
        title="Button filled"
        description="Bottoni based riempiti"
      >
        <ButtonsIconsPre />
      </SectionContainer>
      <SectionContainer
        title="Button filled"
        description="Bottoni based riempiti"
      >
        <ButtonsIconsPost />
      </SectionContainer>
    </>
  );
}

export default ButtonSection;
