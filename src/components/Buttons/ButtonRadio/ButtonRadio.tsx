/* import "./ButtonRadio.scss"; */

interface IButtonRadio {
  dispatchEvent: (e: any) => void;
  value: string | number;
  isSelected: boolean;
}

function ButtonRadio({ dispatchEvent, value, isSelected }: IButtonRadio) {
  return (
    <input
      type="radio"
      name="radio-btn"
      value={value}
      checked={isSelected}
      onChange={dispatchEvent}
    />
  );
}

export default ButtonRadio;
