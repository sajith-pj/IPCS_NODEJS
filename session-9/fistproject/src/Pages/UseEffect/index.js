import React, { useEffect, useState } from "react";
import ToggleDiv from "./ToggleDiv";

const UseEffectDemo = () => {
  const [isVisible, setIsVisible] = useState(false);



  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container mt-5">
      <button type="button" onClick={handleToggle} className="btn btn-primary">
        Show / Hide
      </button>

      {isVisible ? <ToggleDiv /> : ""}
    </div>
  );
};

export default UseEffectDemo;
