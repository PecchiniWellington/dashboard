import "./Tab.scss";
import { useState } from "react";
import TabBody from "./TabBody/TabBody";
import TabHeader from "./TabHeader/TabHeader";

interface ITab {
  tabHeader: ITabHeader[] | JSX.Element;
  children: JSX.Element[] | JSX.Element;
  moreLogsChildren: JSX.Element[] | JSX.Element;

  dispatchEvent: (id: number) => void;
}

interface ITabHeader {
  label: string;
  id: number;
}

const Tab = ({
  tabHeader,
  children,
  dispatchEvent,
  moreLogsChildren,
}: ITab) => {
  const [isTabActive, setIsTabActive] = useState(0);

  const onSetIsTabActive = (index: number, id: number) => {
    dispatchEvent(id);
    setIsTabActive(index);
  };
  return (
    <div className="vot__tab">
      <div className="vot__tabHeader">
        {tabHeader.map((tab: { label: string; id: number }, index: number) => (
          <TabHeader
            key={tab.id}
            tabHeader={tab}
            tabHeaderLength={tabHeader.length}
            isTabActive={isTabActive === index}
            dispatchEvent={() => onSetIsTabActive(index, tab.id)}
          ></TabHeader>
        ))}
      </div>
      <div className="vot__tabMore">{moreLogsChildren}</div>
      <div className="vot__tabBody">
        {children
          .filter((_, index: number) => index === isTabActive)
          .map((tab: JSX.Element, index: number) => (
            <TabBody key={index}>{tab}</TabBody>
          ))}
      </div>
    </div>
  );
};

export default Tab;
