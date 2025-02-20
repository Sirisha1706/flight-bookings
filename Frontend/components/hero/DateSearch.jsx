'use client'

import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useDispatch, useSelector } from "react-redux";

const DateSearch = ({setDate}) => {
  const filters = useSelector((state) => state.flightFilter);
  // const [dates, setDates] = useState([
  //   new DateObject({ year: 2023, month: 1, day: 22 }),
  //   "December 09 2020",
  //   1597994736000, //unix time in milliseconds (August 21 2020)
  // ]);
  const [date, setDates] = useState(new DateObject());

  useEffect(()=>{
    setDate(date.format('YYYY-MM-DD'));
  }, [date]);

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={date}
        onChange={setDates}
        format="MMMM DD"
      />
    </div>
  );
};

export default DateSearch;
