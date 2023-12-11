import "./Card.scss";

interface ICard {
  children: string | JSX.Element | JSX.Element[];
  customClass?: string;
}

function Card({ children, customClass }: ICard) {
  return (
    <div className={`card ${customClass}`}>
      {/* <div className="card__title">React loading Button</div>
      <span className="card__description">
        CoreUI includes a buttons with built-in loading indicators. Indicate the
        loading state of the button bridging the gap between action and
        feedback..
      </span> */}

      {children}
    </div>
  );
}

export default Card;
