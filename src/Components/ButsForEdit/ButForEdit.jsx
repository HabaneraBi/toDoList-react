import classes from "./ButForEdit.module.css";

export default function ButForEdit({ children, onClick }) {
  return (
    <button onClick={onClick} className={classes.butW}>
      {children}
    </button>
  );
}
