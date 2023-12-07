import "./ButtonRound.scss";

interface IButtonRound {
  dispatchEvent: () => void;
  disable: boolean;
  children: string | JSX.Element | JSX.Element[];
}

function ButtonRound({ dispatchEvent, disable, children }: IButtonRound) {
  return (
    <button
      className="vot__buttonRound"
      onClick={dispatchEvent}
      disabled={disable}
    >
      {children}
    </button>
  );
}

export default ButtonRound;
