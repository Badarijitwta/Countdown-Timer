import "./style.css";
function DateInput() {
  return (
    <div className="date-main">
      <h2 id="date-header">Countdown Timer</h2>
      <input
        type="datetime-local"
        id="date-time"
        placeholder="Select Date and Time"
      />
    </div>
  );
}

export default DateInput;
