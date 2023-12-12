import "./Search.scss";
import Card from "../Card2/Card";
import { useState } from "react";
import Button from "../Buttons/Button/Button";
import { useSelector } from "react-redux";

interface ISearch {
  title?: string;
  buttonLabel?: string;
  children: string | JSX.Element | JSX.Element[];
  dispatchEvent: (value: React.SetStateAction<string>) => void;
}

const Search = ({ buttonLabel, dispatchEvent, title, children }: ISearch) => {
  const [value, setValue] = useState("");
  const { isLoading } = useSelector((state) => state.user);

  const onDispatchEvent = (e: any) => {
    e.preventDefault();
    dispatchEvent(value);
    setValue("");
  };

  return {
    /* <Card customClass="vot__search">
      {title ? <div className="vot__searchTitle">{title}</div> : <></>}
      <form className="vot__searchForm" onSubmit={onDispatchEvent}>
        {children}
        <Button asyncButton={isLoading} type="submit" projectType="primary">
          {buttonLabel || "Cerca"}
        </Button>
      </form>
    </Card> */
  };
};

export default Search;
