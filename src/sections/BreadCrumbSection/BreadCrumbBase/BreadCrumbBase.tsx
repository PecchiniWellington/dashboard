import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";

interface IBreadCrumbsBase {
  customClass?: string;
}

function BreadCrumbsBase({ customClass }: IBreadCrumbsBase) {
  const location = useLocation();
  return (
    <div className={`breadCrumbsBase ${customClass}`}>
      <SectionContainer
        customClass={`alertsBase ${customClass}`}
        title="Button filled"
        description="Bottoni based riempiti"
      >
        <SectionContainerRow title="normal" direction="row" space={40}>
          <BreadCrumbs routes={location.pathname} separator=">"></BreadCrumbs>
        </SectionContainerRow>
      </SectionContainer>
    </div>
  );
}

export default BreadCrumbsBase;
