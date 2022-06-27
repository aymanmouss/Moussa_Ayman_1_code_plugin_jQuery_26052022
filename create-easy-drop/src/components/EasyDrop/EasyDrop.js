import React, { useState } from "react";

export function EasyDrop({
  data,
  label,
  name,
  placeholder,
  inputeDepartments,
}) {
  const [display, setDisplay] = useState(false);
  const [inputeDepartment, setInputDepartment] = useState(placeholder);
  inputeDepartments(inputeDepartment);
  return (
    <>
      <label htmlFor='department'>{label}</label>
      <input
        type='button'
        name={name}
        value={inputeDepartment}
        className='inputBtn '
        onClick={(e) => {
          setDisplay(!display);
        }}
      />
      {display && (
        <ul className='optionList'>
          {data.map((dep) => {
            return (
              <li
                onClick={(e) => {
                  setInputDepartment(e.target.innerText);
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
