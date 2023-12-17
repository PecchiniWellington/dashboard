import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";

function BreadCrumbsBase() {
  const location = useLocation();
  return (
    <SectionContainerRow title="normal" direction="row" space={40}>
      <BreadCrumbs routes={location.pathname} separator=">"></BreadCrumbs>
    </SectionContainerRow>
  );
}

export default BreadCrumbsBase;
