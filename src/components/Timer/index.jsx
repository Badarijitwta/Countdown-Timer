// import { useState, useEffect } from "react";
import DisplayWrapper from "../Displayer/index";
import InputWrapper from "../InputWrapper/index";

function Timer() {
  return (
    <div>
      <InputWrapper />
      <DisplayWrapper />
      <div className="display-back">
        <img src="wave.svg" alt="" />
      </div>
    </div>
  );
}

export default Timer;
