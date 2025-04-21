import InputComponent from "../InputComponent/InputComponent";
import classes from "./Interactive.module.css";
import SvgTheme from "../SVG-picture/SvgTheme/SvgTheme";
import SelectSort from "../SelectSort/SelectSort";
import { useContext } from "react";
import { ContextForSearchAndSelect } from "../../Main/App";

export default function Interactive() {
  const context = useContext(ContextForSearchAndSelect);

  function onChangeSearch(e) {
    context.setSearchVal(e.target.value);
  }

  function onChangeSelect(e) {
    context.setSelectVal(e.target.value);
  }

  return (
    <div className={classes.interactive}>
      <InputComponent
        onChange={onChangeSearch}
        width="595px"
        placeholder="Search note..."
      />
      <SelectSort onChange={onChangeSelect} selectVal={context.selectVal} />
      <button className={classes.but}>
        <SvgTheme />
      </button>
    </div>
  );
}
