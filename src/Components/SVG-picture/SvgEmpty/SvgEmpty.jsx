import classes from "./SvgEmpty.module.css";
import imageLight from "../../../svg-image/emptyLight.svg";
import imageDark from "../../../svg-image/emptyDark.svg";

export default function SvgEmpty({ theme }) {
  return (
    <div className={classes.contentImage}>
      <img className={classes.img} src={theme ? imageDark : imageLight} />
      <p className={classes.pEmpty}>Empty...</p>
    </div>
  );
}
