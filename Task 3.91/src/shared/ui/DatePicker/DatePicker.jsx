import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ selectedDate, onChange }) => {
  return (
    <div className="datepicker-wrapper">
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => {
          if (date) {
            onChange(new Date(date.setHours(0, 0, 0, 0)));
          }
        }}
        dateFormat="yyyy-MM-dd"
        className="custom-datepicker"
      />
    </div>
  );
};

export default DatePicker;
