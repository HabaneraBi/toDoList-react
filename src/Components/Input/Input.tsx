import {
  FC,
  ChangeEvent,
  KeyboardEventHandler,
  ChangeEventHandler,
} from "react";
import classes from "./Input.module.css";

interface InputProps {
  onKey?: KeyboardEventHandler;
  placeholder: string;
  width: number;
  val?: string;
  onChange: ChangeEventHandler;
  parentWidth: number;
}

const Input: FC<InputProps> = ({
  onKey,
  placeholder,
  width,
  val,
  onChange,
  parentWidth,
}) => {
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
};

export { Input };
