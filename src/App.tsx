import "./styles.css";
import Calendar from "./components/Calendar";

export default function App() {
  return (
    <div className="App">
      <Calendar currentDate={new Date()} />
    </div>
  );
}
