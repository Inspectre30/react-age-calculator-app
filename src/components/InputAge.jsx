import React, { useState } from "react";
import arrow from "../assets/images/icon-arrow.png";
import Calculate from "./Calculate";
import ErrorToolTip from "./ErrorToolTip";
import "../App.css";

const InputAge = () => {
  const [dayValue, setDayValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");

  const [isValidDay, setIsValidDay] = useState(true);
  const [isValidMonth, setIsValidMonth] = useState(true);
  const [isValidYear, setIsValidYear] = useState(true);

  const [calculatedDay, setCalculatedDay] = useState("");
  const [calculatedMonth, setCalculatedMonth] = useState("");
  const [calculatedYear, setCalculatedYear] = useState("");

  const handleDayChange = (e) => {
    const value = e.target.value;
    const isValid = value >= 1 && value <= 31;
    setDayValue(value);
    setIsValidDay(isValid);
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    const isValid = value >= 1 && value <= 12;
    setMonthValue(value);
    setIsValidMonth(isValid);
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    const isValid = value >= 1900 && value <= 2023;
    setYearValue(value);
    setIsValidYear(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const baseDay = 31;
    const baseMonth = 12;
    const currentYear = new Date().getFullYear();
    const remainingDay = baseDay - Number(dayValue);
    const remainingMonth = baseMonth - Number(monthValue);
    const calculatedYear = currentYear - Number(yearValue);

    setCalculatedDay(remainingDay.toString());
    setCalculatedMonth(remainingMonth.toString());
    setCalculatedYear(calculatedYear.toString());
    
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <div className="date">
            <label
              htmlFor="day"
              className={`label-day ${!isValidDay && dayValue !== "" ? "label-error" : ""}`}
            >
              Day
            </label>
            <input
              type="number"
              id="day"
              className={`day ${!isValidDay && dayValue !== "" ? "error" : ""}`}
              value={dayValue}
              onChange={handleDayChange}
            />
            {!isValidDay && dayValue !== "" && <ErrorToolTip message="Must be a valid day" />}
          </div>
          <div className="month">
            <label
              htmlFor="month"
              className={`label-month ${
                !isValidMonth && monthValue !== "" ? "label-error" : ""
              }`}
            >
              Month
            </label>
            <input
              type="number"
              id="month"
              className={`month ${!isValidMonth && monthValue !== "" ? "error" : ""}`}
              value={monthValue}
              onChange={handleMonthChange}
            />
            {!isValidMonth && monthValue !== "" && <ErrorToolTip message="Must be a valid month" />}
          </div>
          <div className="year">
            <label
              htmlFor="year"
              className={`label-year ${!isValidYear && yearValue !== "" ? "label-error" : ""}`}
            >
              Year
            </label>
            <input
              type="number"
              id="year"
              className={`year ${!isValidYear && yearValue !== "" ? "error" : ""}`}
              value={yearValue}
              onChange={handleYearChange}
            />
            {!isValidYear && yearValue !== "" && <ErrorToolTip message="Must be a valid year" />}
          </div>
        </div>
        <div className="cta-wrapper">
          <hr />
          <button className="btn-submit" type="submit">
            <img src={arrow} alt="Submit" />
          </button>
        </div>
      </form>
      <div>
        <Calculate day={calculatedDay} month={calculatedMonth} year={calculatedYear} />
      </div>
    </div>
  );
};

export default InputAge;



