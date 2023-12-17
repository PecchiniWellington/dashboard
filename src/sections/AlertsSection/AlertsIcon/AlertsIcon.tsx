import Alerts from "../../../components/Alerts/Alerts";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";

function AlertsIcon() {
  return (
    <SectionContainerRow title="normal" direction="column" space={40}>
      <Alerts alertType="primary" hasIcon={true} iconSize="2xl" isOpen={true}>
        A simple primary alert—check it out!
      </Alerts>
      <Alerts alertType="secondary" hasIcon={true} iconSize="2xl" isOpen={true}>
        A simple secondary alert—check it out!
      </Alerts>
      <Alerts alertType="info" hasIcon={true} iconSize="2xl" isOpen={true}>
        A simple info alert—check it out!
      </Alerts>
      <Alerts alertType="light" hasIcon={true} iconSize="2xl" isOpen={true}>
        A simple light alert—check it out!
      </Alerts>
      <Alerts alertType="dark" hasIcon={true} iconSize="2xl" isOpen={true}>
        A simple dark alert—check it out!
      </Alerts>
      <Alerts alertType="success" hasIcon={true} iconSize="2xl" isOpen={true}>
        A simple primary alert—check it out!
      </Alerts>
      <Alerts alertType="warning" hasIcon={true} iconSize="2xl" isOpen={true}>
        A simple primary alert—check it out!
      </Alerts>
      <Alerts alertType="error" hasIcon={true} iconSize="2xl" isOpen={true}>
        A simple primary alert—check it out!
      </Alerts>
    </SectionContainerRow>
  );
}

export default AlertsIcon;
