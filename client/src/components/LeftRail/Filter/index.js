import { Context } from "context/context";
import { useContext, useEffect, useRef, useState } from "react";

import "./Filter.scss";

export const Filter = () => {
  const { selected, setSelected } = useContext(Context);

  const classname = () => {
    return "s";
  };

  const options = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <div className="filter">
      <div className="row">
        {options.splice(0, 3).map((opt, idx) => {
          return (
            <p
              key={idx}
              className={opt.toLowerCase() === selected && "selected"}
              onClick={(e) => setSelected(e.target.innerText.toLowerCase())}
            >
              {opt}
            </p>
          );
        })}
      </div>
      <div className="row">
        {options.splice(0, 2).map((opt, idx) => {
          return (
            <p
              key={idx}
              className={opt.toLowerCase() === selected && "selected"}
              onClick={(e) => setSelected(e.target.innerText.toLowerCase())}
            >
              {opt}
            </p>
          );
        })}
      </div>
      <div className="row">
        {options.splice(0, 3).map((opt, idx) => {
          return (
            <p
              key={idx}
              className={opt.toLowerCase() === selected && "selected"}
              onClick={(e) => setSelected(e.target.innerText.toLowerCase())}
            >
              {opt}
            </p>
          );
        })}
      </div>
      {/* <div className="row">
        {options.splice(2, 4).map((opt, idx) => {
          return (
            <p
              key={idx}
              className={classname}
              onClick={(e) => setSelected(e.target.innerText.toLowerCase())}
            >
              {opt}
            </p>
          );
        })}
      </div> */}
      {/* <div className="row">
        <p onClick={(e) => setSelected(e.target.innerText.toLowerCase())}>
          {options[5]}
        </p>
      </div> */}
    </div>
  );
};
