import classes from "./FilterDropdown.module.css";
export default function FilterDropdown({ onChange, selectVal }) {
  return (
    <div className={classes.forSelect}>
      <select onChange={onChange} value={selectVal} className={classes.select}>
        <option value="all">ALL</option>
        <option value="complete">Complete</option>
        <option value="inComplete">Incomplete</option>
      </select>
    </div>
  );
}
