![Logo](https://i.postimg.cc/85NPqmQ2/Screenshot-2022-06-27-at-12-38-19.png)

# ✅ Easy Drop

With Easy Drop, you can easily create drop-down menus for react applications. It is easy to use and customize.

## Tech Stack

**Client:** React, Storybook, Rollup, Babel

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Installation

Install my-project with npm

```bash
  npm install easy-drop
```

## Documentation

```javascript
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
```

## Usage/Examples

```javascript
<EasyDropDown data={department} placeholder={""} label={"Department"} />
```

```css
.optionList {
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  z-index: 3;
}
ul {
  padding-left: 13px;
  border-bottom: 1px solid #ced4da;
  border-left: 1px solid #ced4da;
  border-right: 1px solid #ced4da;
  margin-top: -10px;
  padding-top: 20px;
  padding-bottom: 10px;
  list-style: none;
  background-color: #fff;
}
li {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
}
li:hover {
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  padding: 0.375rem 0.75rem;
  font-size: 1.1rem;
  background-color: #dee3e7;
  cursor: pointer;
}
li:not(:last-child) {
  margin-bottom: 10px;
}
.activeState {
  display: none;
}
```

## Authors

- [@AymanMoussa](https://github.com/aymanmouss)
