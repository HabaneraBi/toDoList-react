import classes from "./SectionUl.module.css";
import SectionLi from "../SectionLi/SectionLi.jsx";
export default function SectionUl({ arrLi }) {
  return (
    <ul className={classes.ul}>
      {arrLi.map((text, index) => {
        <SectionLi text={text} key={index} />;
      })}
    </ul>
  );
}
