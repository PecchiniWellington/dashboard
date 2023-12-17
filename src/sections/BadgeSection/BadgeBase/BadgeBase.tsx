import Badge from "../../../components/Badge/Badge";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";

function BadgeBase() {
  return (
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
  );
}

export default BadgeBase;
