import AlertsBase from "./AlertsBase/AlertsBase";
import AlertsIcon from "./AlertsIcon/AlertsIcon";
import AlertManualClose from "./AlertsManualClose/AlertManualClose";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

interface IAlertsSection {
  customClass?: string;
}

function AlertsSection({ customClass }: IAlertsSection) {
  return (
    <>
      <SectionContainer
        customClass={`alertsBase ${customClass}`}
        title="Button filled"
        description="Bottoni based riempiti"
      >
        <AlertsBase />
      </SectionContainer>
      <SectionContainer
        customClass={`alertsBase ${customClass}`}
        title="Button filled"
        description="Bottoni based riempiti"
      >
        <AlertsIcon />
      </SectionContainer>
      <SectionContainer
        customClass={`alertsBase ${customClass}`}
        title="Button filled"
        description="Bottoni based riempiti"
      >
        <AlertManualClose />
      </SectionContainer>
    </>
  );
}

export default AlertsSection;
