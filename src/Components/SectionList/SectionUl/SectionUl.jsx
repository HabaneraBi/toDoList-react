import classes from "./SectionUl.module.css";
import SectionLi from "../SectionLi/SectionLi.jsx";
import { ContextForSearchAndSelect } from "../../../Main/App.jsx";
import { useContext } from "react";
import SvgEmpty from "../../SVG-picture/SvgEmpty/SvgEmpty.jsx";

export default function SectionUl({ arrLi, setArrLi }) {
  const context = useContext(ContextForSearchAndSelect);

  const forMap = (el) => {
    return (
      <SectionLi
        isChecked={el.isChecked}
        arrLi={arrLi}
        id={el.id}
        setArrLi={setArrLi}
        key={el.id}
        text={el.val}
      />
    );
  };

  let groupArrLi = arrLi.filter((el) => {
    switch (context.selectVal) {
      case "complete":
        return el.isChecked === true;
      case "inComplete":
        return el.isChecked === false;
      default:
        return true;
    }
  });

  return (
    <>
      {groupArrLi.length === 0 ? (
        <SvgEmpty />
      ) : (
        <ul className={classes.ul}>
          {context.searchVal !== ""
            ? groupArrLi
                .filter(
                  (el) =>
                    context.searchVal ===
                    el.val.slice(0, context.searchVal.length)
                )
                .map(forMap)
            : groupArrLi.map(forMap)}
        </ul>
      )}
    </>
  );
}
