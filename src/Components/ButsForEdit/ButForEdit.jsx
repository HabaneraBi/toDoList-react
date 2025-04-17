import classes from "./ButForEdit.module.css";

export default function ButForEdit({ children }) {
  return <button className={classes.butW}>{children}</button>;
}
