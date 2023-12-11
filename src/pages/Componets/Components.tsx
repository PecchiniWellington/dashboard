import { Outlet } from "react-router-dom";
import "./Components.scss";

interface IComponents {
  customClass?: string;
}

function Components({ customClass }: IComponents) {
  return (
    <div className={`components ${customClass}`}>
      <Outlet />
    </div>
  );
}

export default Components;
