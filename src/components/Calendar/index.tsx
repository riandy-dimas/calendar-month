import "./styles.css";

import Weekday from "../Weekday";

const getLastDayOfMonth = (date: Date) => {
  const nextMonth = date.getMonth() + 1;
  date.setMonth(nextMonth);
  date.setDate(0);
  return date.getDate();
};

const getDateArr = (currentDate: Date, startIdx: number, endIdx: number) => {
  const result = [];
  for (let i = startIdx; i < endIdx; i++) {
    const date = new Date(currentDate);
    date.setDate(i);
    result.push(date);
  }
  return result;
};

type TCalendar = {
  currentDate?: Date;
};

const Calendar = ({ currentDate = new Date() }: TCalendar) => {
  const startDate = new Date(currentDate);
  startDate.setDate(1);

  const startIndex = -startDate.getDay() + 1;

  const lastDayOfMonth = getLastDayOfMonth(startDate);
  const endDate = new Date(currentDate);
  endDate.setFullYear(
    startDate.getFullYear(),
    startDate.getMonth(),
    lastDayOfMonth
  );
  const endIndex = lastDayOfMonth + (7 - endDate.getDay());

  const dates = getDateArr(currentDate, startIndex, endIndex);

  const currentMonth = currentDate.toLocaleString("default", { month: "long" });

  return (
    <div className="calendar">
      <div className="calendar__month">{currentMonth}</div>
      <Weekday />
      <div className="calendar__dates">
        {dates.map((date) => {
          const isCurrentMonth = date.getMonth() === currentDate.getMonth();
          const isCurrentDate =
            date.getDate() === currentDate.getDate() && isCurrentMonth;

          return (
            <div
              key={date.getTime()}
              className={`calendar__date
                ${isCurrentMonth ? "" : " calendar__date--passive"}
                ${isCurrentDate ? " calendar__date--current" : ""}
                `}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
