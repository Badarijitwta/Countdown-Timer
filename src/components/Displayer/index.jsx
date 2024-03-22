import "./style.css";

function DisplayWrapper() {
  return (
    <div className="display-wrapper-container">
      <div className="display-wrapper-main">
        <div className="days"></div>
        <div className="hour"></div>
        <div className="minutes"></div>
        <div className="seconds"></div>
      </div>
    </div>
  );
}

export default DisplayWrapper;
