import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface ICustomDatePiker {
  dispatchEvent: (e: any) => void;
}

export const CustomDatePicker = ({ dispatchEvent }: ICustomDatePiker) => {
  const [date, setDate] = useState("");

  const handleDateSelect = (e) => {
    setDate(e);
    dispatchEvent(e);
  };
  const handleDateChange = (e) => {
    console.log("CHANGE", e);
  };

  const insertPlaceHolder = () => {
    const context = document.getElementsByClassName(
      "react-datepicker__input-container"
    );

    for (let index = 0; index < context.length; index++) {
      context[index].firstChild.placeholder = "Inserisci data";
      //const element = array[index];
    }
  };
  useEffect(() => {
    insertPlaceHolder();
  }, []);
  return (
    <DatePicker
      selected={date}
      onSelect={handleDateSelect} //when day is clicked
      onChange={handleDateChange} //only when value has changed
    />
  );
};
