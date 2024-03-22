import "./style.css";

function DisplayWrapper() {
  return (
    <>
      <div className="display-wrapper-container">
        <h3 id="remaining-time-header">Remaining Time</h3>
        <div className="display-wrapper-main">
          <div className="days">
            <h5>No.</h5>
            <h5>day(s)</h5>
          </div>
          <div className="hour">
            <h5>No.</h5>
            <h5>hour(s)</h5>
          </div>
          <div className="minutes">
            <h5>No.</h5>
            <h5>minute(s)</h5>
          </div>
          <div className="seconds">
            <h5>No.</h5>
            <h5>seconds(s)</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayWrapper;
