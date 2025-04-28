import classes from "./EmptyContent.module.css";
import detectiveDark from "../../shared/icons/detectiveDark.svg";
import detectiveLight from "../../shared/icons/detectiveLight.svg";

export default function EmptyContent({ theme }) {
  return (
    <div className={classes.contentImage}>
      <img
        className={classes.img}
        src={theme ? detectiveDark : detectiveLight}
      />
      <p className={classes.pEmpty}>Empty...</p>
    </div>
  );
}
