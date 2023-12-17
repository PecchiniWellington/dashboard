import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";
import Alerts from "../../../components/Alerts/Alerts";

function AlertsBase() {
  return (
    <SectionContainerRow title="normal" direction="column" space={40}>
      <Alerts isOpen={true} alertType="primary">
        A simple primary alert—check it out!
      </Alerts>
      <Alerts isOpen={true} alertType="secondary">
        A simple secondary alert—check it out!
      </Alerts>
      <Alerts isOpen={true} alertType="info">
        A simple info alert—check it out!
      </Alerts>
      <Alerts isOpen={true} alertType="light">
        A simple light alert—check it out!
      </Alerts>
      <Alerts isOpen={true} alertType="dark">
        A simple dark alert—check it out!
      </Alerts>
      <Alerts isOpen={true} alertType="success">
        A simple primary alert—check it out!
      </Alerts>
      <Alerts isOpen={true} alertType="warning">
        A simple primary alert—check it out!
      </Alerts>
      <Alerts isOpen={true} alertType="error">
        A simple primary alert—check it out!
      </Alerts>
    </SectionContainerRow>
  );
}

export default AlertsBase;
