import classes from "./SortingAndHeadingField.module.css";
import SortingField from "../SortingField/SortingField";

export default function SortingAndHeadingField() {
  return (
    <section className={classes.content}>
      <h1 className={classes.h1}>TODO LIST</h1>
      <SortingField />
    </section>
  );
}
