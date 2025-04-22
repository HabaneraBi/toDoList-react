import classes from "./InputComponent.module.css";

export default function InputComponent({
  onKey,
  placeholder,
  width,
  val,
  onChange,
}) {
  return (
    <input
      onChange={onChange}
      value={val}
      style={{ width: width }}
      placeholder={placeholder}
      className={classes.inp}
      onKeyDown={onKey}
      type="text"
    />
  );
}
