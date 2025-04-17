import InputComponent from "../InputComponent/InputComponent";
import classes from "./Interactive.module.css";

export default function Interactive() {
  return (
    <div className={classes.interactive}>
      {/* <input placeholder="Search note..." className={classes.inp} type="text" /> */}
      <InputComponent width="595px" placeholder="Search note..." />
      <select className={classes.select}>
        <option>ALL</option>
        <option>END</option>
      </select>
      <button className={classes.but}>T</button>
    </div>
  );
}
