import React, { useState } from "react";

const Counter = () => {
    
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };


  return (
    <div className="container mt-5">
      <div className="card w-50 p-5">
        <div>
          <h1> Counter: {count} </h1>
        </div>
        <div className="d-flex mt-5">
          <button
            type="button"
            name="counter-plus"
            className="btn btn-success w-100 me-5"
            onClick={handleAdd}
          >
            +
          </button>
          <button
            type="button"
            name="counter-subtract"
            className="btn btn-danger w-100"
            onClick={handleSubtract}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
