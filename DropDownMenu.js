import React, { useState } from "react";
export function EasyDropDown({ data, placeholder, label, name }) {
  const [display, setDisplay] = useState(false);
  const [inputeData, setInputeData] = useState(placeholder);
  return (
    <>
      <label htmlFor='department'>{label}</label>
      <input
        type='button'
        name={name}
        value={inputeData}
        className='inputBtn '
        onClick={(e) => {
          setDisplay(!display);
        }}
      />
      {display && (
        <ul className='optionList'>
          {data.map((dep, inidex) => {
            return (
              <li
                key={inidex}
                onClick={(e) => {
                  setInputeData(e.target.innerText);
                  setDisplay(!display);
                }}
              >
                {dep}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
