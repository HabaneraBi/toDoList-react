import classes from "./Input.module.css";

export function Input({
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
