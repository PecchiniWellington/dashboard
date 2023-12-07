import "./Spinner.scss";

interface ISpinner {
  customColor?: string;
  size?: number;
}

function Spinner({ customColor, size = 40 }: ISpinner) {
  return (
    <div
      className="circle-container"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <svg
        style={{ stroke: customColor, height: `${size}px`, width: `${size}px` }}
        fill="none"
        className="circle-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="circle" cx="50" cy="50" r="45" />
      </svg>
    </div>
  );
}

export default Spinner;
