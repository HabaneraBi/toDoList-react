import classes from "./Button.module.css";

export function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={classes.butW}>
      {children}
    </button>
  );
}
