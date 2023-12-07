import "./Select.scss";

interface ISelect {
  moreInfoOpt?: string;
  value?: string | number | readonly string[] | undefined;
  options: { label: string; value: string | number }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

const Select = ({ value, onChange, options, moreInfoOpt }: ISelect) => {
  return (
    <select className="vot__select" value={value} onChange={onChange}>
      {options?.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
          {moreInfoOpt}
        </option>
      ))}{" "}
    </select>
  );
};

export default Select;
