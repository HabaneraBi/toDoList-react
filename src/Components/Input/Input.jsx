import classes from "./Input.module.css";

export default function Input({
  onKey,
  placeholder,
  width,
  val,
  onChange,
  parentWidth,
}) {
  return (
    <input
      onChange={onChange}
      value={val}
      style={{ maxWidth: width, width: `${(width * 100) / parentWidth}%` }}
      placeholder={placeholder}
      className={classes.inp}
      onKeyDown={onKey}
      type="text"
    />
  );
}
