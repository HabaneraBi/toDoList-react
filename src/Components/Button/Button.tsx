import { FC, PropsWithChildren } from "react";
import classes from "./Button.module.css";

const Button: FC<PropsWithChildren<{ onClick: React.MouseEventHandler }>> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={classes.butW}>
      {children}
    </button>
  );
};

export { Button };
