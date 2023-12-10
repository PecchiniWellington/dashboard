import "./PageTitle.scss";

interface IPageTitle {
  children: string | JSX.Element | JSX.Element[];
}

function PageTitle({ children }: IPageTitle) {
  return <div className={`pageTitle`}>{children}</div>;
}

export default PageTitle;
