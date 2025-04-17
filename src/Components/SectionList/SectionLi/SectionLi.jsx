import classes from "./SectionLi.module.css";
import ButsForEdit from "../../ButsForEdit/ButsForEdit.jsx";

export default function SectionLi({ text, key }) {
  return (
    <li key={key} className={classes.li}>
      <input className={classes.checkbox} type="checkbox" />
      <span className={classes.text}>{text}</span>
      <ButsForEdit />
    </li>
  );
}
