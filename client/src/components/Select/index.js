import React, { useEffect, useState } from "react";
import "./Select.scss";

export const Select = ({ options, setOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    setOption(selected);
  }, [selected]);

  return (
    <div className="select">
      <span className="selected">{selected}</span>
      {isOpen ? (
        <i onClick={() => setIsOpen(!isOpen)} className="fas fa-chevron-up"></i>
      ) : (
        <i
          onClick={() => setIsOpen(!isOpen)}
          className="fas fa-chevron-down"
        ></i>
      )}

      <div className="drop-down">
        {isOpen &&
          options.map((option, idx) => {
            return (
              <div
                onClick={(e) => {
                  setSelected(e.target.innerText);
                  setIsOpen(false);
                }}
                key={idx}
              >
                <span>{option}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
