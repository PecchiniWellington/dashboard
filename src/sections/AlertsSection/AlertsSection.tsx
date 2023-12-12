import "./AlertsSection.scss";
import AlertsBase from "./AlertsBase/AlertsBase";
import AlertsIcon from "./AlertsIcon/AlertsIcon";
import AlertManualClose from "./AlertsManualClose/AlertManualClose";
import { useState } from "react";
import Alerts from "../../components/Alerts/Alerts";

interface IAlertsSection {
  customClass?: string;
}

function AlertsSection({ customClass }: IAlertsSection) {
  const [isOpen, setIsOpen] = useState(false);

  const openAlert = () => setIsOpen(true);
  return (
    <div className={`alertsSection ${customClass}`}>
      <div>
        <Alerts
          alertType="info"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          isManualClose={true}
        >
          Test
        </Alerts>
        <button onClick={openAlert}>OPEN</button>
      </div>

      <AlertsBase />
      <AlertsIcon />
      <AlertManualClose />
    </div>
  );
}

export default AlertsSection;
