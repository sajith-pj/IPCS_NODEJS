import React, { useEffect, useState } from "react";

const ToggleDiv = () => {
  const [count, setCount] = useState(0);

  // componetDidMount
  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("Component is unmounting...");
    };
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-info p-5 mt-4 text-white">
      <h1>Count: {count} </h1>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
};

export default ToggleDiv;
