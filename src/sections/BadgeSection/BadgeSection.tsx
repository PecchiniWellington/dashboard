import BadgeBase from "./BadgeBase/BadgeBase";
import "./BadgeSection.scss";

interface IBadgeSection {
  customClass?: string;
}

function BadgeSection({ customClass }: IBadgeSection) {
  return (
    <div className={`badgeSection ${customClass}`}>
      <BadgeBase />
    </div>
  );
}

export default BadgeSection;
