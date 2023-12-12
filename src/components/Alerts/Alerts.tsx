import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Alerts.scss";
import {
  faCheck,
  faCircleExclamation,
  faClose,
  faHeart,
  faInfo,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IAlerts {
  children: string | JSX.Element | JSX.Element[];
  hasIcon?: boolean;
  isManualClose?: any;
  alertType?: string;
  customIcon?: any;
  iconSize?: SizeProp;
  isOpen?: boolean;
  onClose?: () => void;
}

function Alerts({
  customIcon,
  children,
  hasIcon,
  isManualClose,
  alertType = "info",
  iconSize,
  isOpen = false,
  onClose,
}: IAlerts) {
  const iconType = (alertType: string) => {
    switch (alertType) {
      case "info":
        return <FontAwesomeIcon icon={faInfo} size={iconSize} />;
      case "warning":
        return <FontAwesomeIcon icon={faWarning} size={iconSize} />;
      case "error":
        return <FontAwesomeIcon icon={faCircleExclamation} size={iconSize} />;
      case "success":
        return <FontAwesomeIcon icon={faCheck} size={iconSize} />;
      default:
        return customIcon || <FontAwesomeIcon icon={faHeart} size={iconSize} />;
    }
  };

  return (
    <>
      <div className={`${isOpen ? "alert" : "close"} ${alertType || ""}`}>
        <div className="content">
          {hasIcon && iconType(alertType)}
          {children}
        </div>

        {isManualClose && (
          <FontAwesomeIcon
            className="iconClose"
            icon={faClose}
            size={iconSize}
            onClick={onClose}
          />
        )}
      </div>
    </>
  );
}

export default Alerts;
