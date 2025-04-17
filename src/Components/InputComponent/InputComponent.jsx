import classes from "./InputComponent.module.css";

export default function InputComponent({ placeholder, width, val, onChange }) {
  return (
    <input
      onChange={onChange}
      value={val}
      style={{ width: width }}
      placeholder={placeholder}
      className={classes.inp}
      type="text"
    />
  );
}
