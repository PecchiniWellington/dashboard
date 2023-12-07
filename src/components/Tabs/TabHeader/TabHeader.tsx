import Button from "../../Buttons/Button/Button";
import "./TabHeader.scss";

interface ITabHeader {
  tabHeader: ITabHeaderValue;
  isTabActive: boolean;
  dispatchEvent: () => void;
  tabHeaderLength: number;
}

interface ITabHeaderValue {
  label: string;
  id: number;
}

const TabHeader = ({
  tabHeader,
  tabHeaderLength,
  isTabActive,
  dispatchEvent,
}: ITabHeader) => {
  return (
    <Button
      customStyle={{ width: `calc( 100% / ${tabHeaderLength})` }}
      projectType={`${isTabActive ? "primary" : ""}`}
      customClass="tabButton"
      type="button"
      dispatchEvent={dispatchEvent}
    >
      {tabHeader.label}
    </Button>
  );
};

export default TabHeader;
