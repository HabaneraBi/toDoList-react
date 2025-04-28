import Input from "../Input/Input.jsx";
import classes from "./SortingField.module.css";
import DarkIconBut from "../../shared/icons/darkIconBut.svg?react";
import LightIconBut from "../../shared/icons/lightIconBut.svg?react";
import FilterDropdown from "../FilterDropdown/FilterDropdown.jsx";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Page/ToDoList.jsx";

const lightTheme = {
  "--input-color": "rgb(108, 99, 255)",
  "--all-color": "rgb(247, 247, 247)",
  "--li-color": "black",
  "--placeholder-color": "rgb(195,193,229)",
  "--active-checkbox": "rgb(238, 237, 255)",
  "--span-color": "#252525",
};

const darkTheme = {
  "--input-color": "rgb(247, 247, 247)",
  "--all-color": "rgb(37,37,37)",
  "--li-color": "rgb(247, 247, 247)",
  "--placeholder-color": "rgb(102,102,102)",
  "--active-checkbox": "rgb(73, 73, 73)",
  "--span-color": "#979797",
};

export default function SortingField() {
  const context = useContext(GlobalContext);

  function onChangeSearch(e) {
    context.setSearchVal(e.target.value);
  }

  function onChangeSelect(e) {
    context.setSelectVal(e.target.value);
  }

  function onClickTheme() {
    context.setTheme((prev) => !prev);
  }

  useEffect(() => {
    if (context.theme) {
      for (const el in darkTheme) {
        document.documentElement.style.setProperty(el, darkTheme[el]);
      }
    } else {
      for (const el in lightTheme) {
        document.documentElement.style.setProperty(el, lightTheme[el]);
      }
    }
  });

  return (
    <div className={classes.interactive}>
      <Input
        parentWidth={750}
        onChange={onChangeSearch}
        width={595}
        placeholder="Search note..."
      />
      <FilterDropdown onChange={onChangeSelect} selectVal={context.selectVal} />
      <button onClick={onClickTheme} className={classes.but}>
        {context.theme ? <DarkIconBut /> : <LightIconBut />}
      </button>
    </div>
  );
}
