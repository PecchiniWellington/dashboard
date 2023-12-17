import { useState } from "react";
import Alerts from "../../../components/Alerts/Alerts";
import Button from "../../../components/Buttons/Button/Button";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";

function AlertManualClose() {
  const [openPrimary, setOpenPrimary] = useState(false);
  const [openSecondary, setOpenSecondary] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openLight, setOpenLight] = useState(false);
  const [openDark, setOpenDark] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [openError, setOpenError] = useState(false);

  return (
    <SectionContainerRow title="normal" direction="column" space={40}>
      <Button projectType="primary" dispatchEvent={() => setOpenPrimary(true)}>
        Open primary
      </Button>
      <Alerts
        isManualClose={true}
        alertType="primary"
        isOpen={openPrimary}
        onClose={() => setOpenPrimary(false)}
      >
        A simple primary alert—check it out!
      </Alerts>

      <Button
        projectType="secondary"
        dispatchEvent={() => setOpenSecondary(true)}
      >
        Open secondary
      </Button>
      <Alerts
        isManualClose={true}
        alertType="secondary"
        isOpen={openSecondary}
        onClose={() => setOpenSecondary(false)}
      >
        A simple secondary alert—check it out!
      </Alerts>

      <Button projectType="info" dispatchEvent={() => setOpenInfo(true)}>
        Open Info
      </Button>
      <Alerts
        isManualClose={true}
        alertType="info"
        isOpen={openInfo}
        onClose={() => setOpenInfo(false)}
      >
        A simple info alert—check it out!
      </Alerts>

      <Button projectType="light" dispatchEvent={() => setOpenLight(true)}>
        Open Light
      </Button>
      <Alerts
        isManualClose={true}
        alertType="light"
        isOpen={openLight}
        onClose={() => setOpenLight(false)}
      >
        A simple light alert—check it out!
      </Alerts>

      <Button projectType="dark" dispatchEvent={() => setOpenDark(true)}>
        Open Dark
      </Button>
      <Alerts
        isManualClose={true}
        alertType="dark"
        isOpen={openDark}
        onClose={() => setOpenDark(false)}
      >
        A simple dark alert—check it out!
      </Alerts>

      <Button projectType="success" dispatchEvent={() => setOpenSuccess(true)}>
        Open Success
      </Button>
      <Alerts
        isManualClose={true}
        alertType="success"
        isOpen={openSuccess}
        onClose={() => setOpenSuccess(false)}
      >
        A simple primary alert—check it out!
      </Alerts>

      <Button projectType="warning" dispatchEvent={() => setOpenWarning(true)}>
        Open Warning
      </Button>
      <Alerts
        isManualClose={true}
        alertType="warning"
        isOpen={openWarning}
        onClose={() => setOpenWarning(false)}
      >
        A simple primary alert—check it out!
      </Alerts>

      <Button projectType="error" dispatchEvent={() => setOpenError(true)}>
        Open Error
      </Button>
      <Alerts
        isManualClose={true}
        alertType="error"
        isOpen={openError}
        onClose={() => setOpenError(false)}
      >
        A simple primary alert—check it out!
      </Alerts>
    </SectionContainerRow>
  );
}

export default AlertManualClose;
