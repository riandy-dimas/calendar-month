import "./styles.css";

const getFullWeekday = () => {
  const date = new Date();
  const idx = date.getDay();

  const result = [];
  for (let i = 0; i < 7; i++) {
    const currIdx = (idx + i) % 7;
    const dayName = date.toString().split(" ")[0];
    date.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    result[currIdx] = dayName;
  }

  return result;
};

const Weekday = () => {
  const weekday = getFullWeekday();
  return (
    <div className="weekday">
      {weekday.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
};

export default Weekday;
