import "./TabBody.scss";

interface ITabBody {
  children: JSX.Element;
}

const TabBody = ({ children }: ITabBody) => {
  return <span className="body">{children}</span>;
};

export default TabBody;
