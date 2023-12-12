import "./AlertsSection.scss";
import AlertsBase from "./AlertsBase/AlertsBase";
import AlertsIcon from "./AlertsIcon/AlertsIcon";
import AlertManualClose from "./AlertsManualClose/AlertManualClose";

interface IAlertsSection {
  customClass?: string;
}

function AlertsSection({ customClass }: IAlertsSection) {
  return (
    <div className={`alertsSection ${customClass}`}>
      <AlertsBase />
      <AlertsIcon />
      <AlertManualClose />
    </div>
  );
}

export default AlertsSection;
