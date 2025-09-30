import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setisOn] = useState(false);
  const handleToggleClick = () => {
    setisOn(!isOn);
  };
  return (
    <div
      className="toggle-switch"
      style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }}
      onClick={handleToggleClick}
    >
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-state">{isOn ? "On" : "Off"}</span>
      </div>
    </div>
  );
};
