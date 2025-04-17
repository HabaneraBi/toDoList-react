import classes from "./SectionWrite.module.css";
import Interactive from "../Interactive/Interactive";

export default function SectionWrite() {
  return (
    <section className={classes.content}>
      <h1 className={classes.h1}>TODO LIST</h1>
      <Interactive />
    </section>
  );
}
