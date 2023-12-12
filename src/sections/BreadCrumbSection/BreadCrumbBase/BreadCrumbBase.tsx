import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";

interface IBreadCrumbsBase {
  customClass?: string;
}

function BreadCrumbsBase({ customClass }: IBreadCrumbsBase) {
  const location = useLocation();
  return (
    <div className={`breadCrumbsBase ${customClass}`}>
      <BreadCrumbs routes={location.pathname} separator=">"></BreadCrumbs>
    </div>
  );
}

export default BreadCrumbsBase;
