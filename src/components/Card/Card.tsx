import "./Card.scss";

interface ICard {
  children: string | JSX.Element | JSX.Element[];
  customClass?: string;
}

function Card({ children, customClass }: ICard) {
  return <div className={`vot__card ${customClass}`}>{children}</div>;
}

export default Card;
