import InputComponent from "../InputComponent/InputComponent";
import classes from "./Interactive.module.css";
import SvgThemeLight from "../SVG-picture/SvgThemeLight/SvgThemeLight";
import SvgThemeDark from "../SVG-picture/SvgThemeDark/SvgThemeDark";
import SelectSort from "../SelectSort/SelectSort";
import { useContext, useEffect } from "react";
import { ContextForSearchAndSelect } from "../../Main/App";
import { lightTheme, darkTheme } from "../../dataThemes";

export default function Interactive() {
  const context = useContext(ContextForSearchAndSelect);

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
      <InputComponent
        parentWidth={750}
        onChange={onChangeSearch}
        width={595}
        placeholder="Search note..."
      />
      <SelectSort onChange={onChangeSelect} selectVal={context.selectVal} />
      <button onClick={onClickTheme} className={classes.but}>
        {context.theme ? <SvgThemeDark /> : <SvgThemeLight />}
      </button>
    </div>
  );
}
