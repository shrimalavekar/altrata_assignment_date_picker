import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import "./datePicker.css";
import { DatePickerSelector } from "../datePickerSelector/datePickerSelector";
import { DatePickerCalendar } from "../datePickerCalender/datePickerCalendar";

export interface IDatePickerProps {
  selectedDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  selectedDate,
  onChange
}) => {
  const [shownDate, setShownDate] = useState(selectedDate.clone());

  return (
    <div className={"DatePicker"}>
      <DatePickerSelector
        shownDate={shownDate}
        setShownDate={setShownDate}
      />

      <DatePickerCalendar
        selectedDate={selectedDate}
        shownDate={shownDate}
        onChange={onChange}
      />
    </div>
  );
};
