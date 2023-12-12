import { useEffect, useRef, useState } from "react";
import "./Badge.scss";

interface IBadge {
  customClass?: string;
  children?: any;
  typeBadge?: string;
  contentBadge?: string | number;
}

function Badge({
  customClass,
  children,
  typeBadge = "primary",
  contentBadge,
}: IBadge) {
  const refRoundBadge = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(refRoundBadge?.current?.offsetWidth);
  }, []);
  const maxNumber = () => {
    if (contentBadge) {
      if (typeof contentBadge === "number") {
        if (contentBadge > 99) {
          return (
            <span
              style={{ height: height }}
              ref={refRoundBadge}
              className={`badge__badge number ${typeBadge}`}
            >
              99+
            </span>
          );
        } else {
          return (
            <span
              style={{ height: height }}
              ref={refRoundBadge}
              className={`badge__badge number ${typeBadge}`}
            >
              {contentBadge}
            </span>
          );
        }
      } else {
        return (
          <span className={`badge__badge string ${typeBadge}`}>
            {contentBadge}
          </span>
        );
      }
    } else {
      return <span className={`badge__badge empty ${typeBadge}`}></span>;
    }
  };
  return (
    <button type="button" className={`badge ${customClass}`}>
      <div className="material-icons">{children}</div>
      {maxNumber()}
    </button>
  );
}

export default Badge;
