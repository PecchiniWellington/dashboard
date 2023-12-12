import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "../../../components/Badge/Badge";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";
import "./BadgeBase.scss";
import { faBell } from "@fortawesome/free-solid-svg-icons";

interface IBadgeBase {
  customClass?: string;
}

function BadgeBase({ customClass }: IBadgeBase) {
  return (
    <div className={`badgeBase ${customClass}`}>
      <SectionContainer
        customClass={`alertsBase ${customClass}`}
        title="Button filled"
        description="Bottoni based riempiti"
      >
        <SectionContainerRow title="normal" direction="row" space={40}>
          <Badge typeBadge="primary" contentBadge={100}>
            <FontAwesomeIcon icon={faBell} />
          </Badge>
          <Badge typeBadge="secondary" contentBadge="secondary">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
          <Badge typeBadge="success" contentBadge="secondary">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
          <Badge typeBadge="warning" contentBadge={50}>
            <FontAwesomeIcon icon={faBell} />
          </Badge>
          <Badge typeBadge="error" contentBadge="secondary">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
          <Badge typeBadge="info" contentBadge="secondary">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
          <Badge typeBadge="light" contentBadge="secondary">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
          <Badge typeBadge="dark" contentBadge={4}>
            <FontAwesomeIcon icon={faBell} />
          </Badge>
        </SectionContainerRow>
      </SectionContainer>
    </div>
  );
}

export default BadgeBase;
