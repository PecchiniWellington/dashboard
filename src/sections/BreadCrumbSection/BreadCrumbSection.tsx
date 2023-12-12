import BreadCrumbsBase from "./BreadCrumbBase/BreadCrumbBase";
import "./BreadCrumbSection.scss";

interface IBreadCrumbSection {
  customClass?: string;
}

function BreadCrumbSection({ customClass }: IBreadCrumbSection) {
  return (
    <div className={`breadCrumbSection ${customClass}`}>
      <BreadCrumbsBase />
    </div>
  );
}

export default BreadCrumbSection;
