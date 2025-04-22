import classes from "./SvgEmpty.module.css";
import image from "../../../svg-image/empty.svg";

export default function SvgEmpty() {
  return (
    <div className={classes.contentImage}>
      <img className={classes.img} src={image} />
      <p className={classes.pEmpty}>Empty...</p>
    </div>
  );
}
