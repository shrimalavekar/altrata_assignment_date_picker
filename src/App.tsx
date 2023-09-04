
import React, { useState } from "react";
import dayjs from "dayjs";
import { DatePicker } from "./component/datePicker/datePicker";

import "./App.css"

export interface IAppProps {}

 const App: React.FC<IAppProps> = () => {
  const [date, setDate] = useState(dayjs());

  return (
    <div className="app__container">
      <div className="app">
        <h4 className="app__title">
          Picked Date: {date.format("DD - MMMM - YYYY")}
        </h4>

        <DatePicker selectedDate={date} onChange={setDate} />
      </div>
    </div>
  );
};
export default App;
