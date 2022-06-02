import React, { useState } from "react";

const DropDownMenu = ({ department, placeholder, inputeDepartments }) => {
  const [display, setDisplay] = useState(false);
  const [inputeDepartment, setInputDepartment] = useState(placeholder);
  inputeDepartments(inputeDepartment);
  return (
    <>
      <label htmlFor='department'>Department</label>
      <input
        type='button'
        name='department'
        value={inputeDepartment}
        className='inputBtn '
        onClick={(e) => {
          setDisplay(!display);
        }}
      />
      {display && (
        <ul className='optionList'>
          {department.map((dep) => {
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
};

export default DropDownMenu;
