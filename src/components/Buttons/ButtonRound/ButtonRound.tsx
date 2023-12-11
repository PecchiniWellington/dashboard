import { useEffect, useRef, useState } from "react";
import "./ButtonRound.scss";
import Spinner from "../../Spinner/Spinner";

interface IButtonRound {
  dispatchEvent: () => void;
  disable: boolean;
  children: string | JSX.Element | JSX.Element[];
  size: number;
  projectType?: string;
  customClass?: string;
  asyncButton?: boolean;
}

function ButtonRound({
  dispatchEvent,
  disable,
  children,
  size,
  projectType,
  customClass,
  asyncButton,
}: IButtonRound) {
  const refRoundButton = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    console.log("REF", refRoundButton.current.offsetWidth);

    setHeight(refRoundButton.current.offsetWidth + 5);
  }, []);

  return (
    <button
      ref={refRoundButton}
      style={{ minWidth: `${size}px`, minHeight: `${height}px` }}
      className={`buttonRound ${customClass || ""} ${projectType}`}
      onClick={dispatchEvent}
      disabled={disable}
    >
      {asyncButton && <Spinner size={15} />}

      {children}
    </button>
  );
}

export default ButtonRound;
