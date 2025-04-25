import classes from "./InputComponent.module.css";

export default function InputComponent({
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
