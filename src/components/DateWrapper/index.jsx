import DateInput from "./../DateInput/index.jsx";
import Button from "./../Button/index";
import "./style.css";
import DisplayWrapper from "./../Displayer/index";

function DateWrapper() {
  return (
    <div className="wrapper-main">
      <DateInput />
      <Button />
      <DisplayWrapper />
    </div>
  );
}

export default DateWrapper;
