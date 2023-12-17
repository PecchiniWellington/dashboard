import { Outlet } from "react-router-dom";
import "./Components.scss";
import Section from "../../sections/Section";

interface IComponents {
  customClass?: string;
}

function Components({ customClass }: IComponents) {
  return (
    <div className={`components ${customClass}`}>
      <Section>
        <Outlet />
      </Section>
    </div>
  );
}

export default Components;
