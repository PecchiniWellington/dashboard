import AlertsBase from "./AlertsBase/AlertsBase";
import AlertsIcon from "./AlertsIcon/AlertsIcon";
import AlertManualClose from "./AlertsManualClose/AlertManualClose";
import Section from "../Section";

interface IAlertsSection {
  customClass?: string;
}

function AlertsSection({ customClass }: IAlertsSection) {
  return (
    <Section>
      <AlertsBase />
      <AlertsIcon />
      <AlertManualClose />
    </Section>
  );
}

export default AlertsSection;
