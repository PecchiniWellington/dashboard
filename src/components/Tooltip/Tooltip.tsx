import { MouseEvent, useEffect, useRef, useState } from "react";
import "./Tooltip.scss";

interface ITooltip {
  children: string | JSX.Element | JSX.Element[];
  customClass?: string;
  tooltipContent: string | JSX.Element | JSX.Element[];
  openOnClick?: boolean;
  isOpen?: boolean;
}

function Tooltip({
  tooltipContent,
  children,
  customClass,
  openOnClick = false,
  isOpen = false,
}: ITooltip) {
  const [isVisible, setIsVisible] = useState(false);
  const refTooltip = useRef<HTMLInputElement>(null);

  /* {refTooltip.current?.getBoundingClientRect().x} */

  const handleMouseEnter = () => {
    if (openOnClick) {
      return;
    } else {
      setIsVisible(true);
    }
  };
  const handleMouseLeave = () => {
    if (openOnClick) {
      return;
    } else {
      setIsVisible(false);
    }
  };

  function handleClickOutside(event: MouseEvent<HTMLDivElement, MouseEvent>) {
    if (refTooltip.current && !refTooltip.current.contains(event.target)) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refTooltip, isOpen]);
  return (
    <div
      ref={refTooltip}
      id="customTooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => handleClickOutside(e)}
      className={`vot__tooltip ${customClass}`}
    >
      {children}

      {isVisible && (
        <div
          className="vot__tooltipContent"
          style={{
            bottom: `calc(${refTooltip.current?.offsetHeight * 2}px - ${
              refTooltip.current?.clientHeight
            }px)`,
            left: `calc(100% - ${refTooltip.current?.clientWidth / 2}px)`,
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
