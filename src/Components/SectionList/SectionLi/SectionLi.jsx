import classes from "./SectionLi.module.css";
import ButsForEdit from "../../ButsForEdit/ButsForEdit.jsx";
import { useState, useRef, useEffect } from "react";

export default function SectionLi({ text, setArrLi, id, isChecked }) {
  const [editing, setEditing] = useState(false);

  const inp = useRef(null);

  useEffect(() => {
    inp.current?.focus();
    inp.current?.select();
  }, [editing]);

  function handleEnter(e) {
    if (e.key === "Enter") {
      setEditing(false);
    }
  }

  function changeText(e) {
    setArrLi((prev) => {
      // const el = prev.find(item => item.id === id)
      // el.val = e.target.value;
      // return [...prev];
      const newArr = prev.map((el) => {
        if (el.id === id) {
          return { ...el, val: e.target.value };
        }
        return el;
      });
      return newArr;
    });
  }

  function changeChecked() {
    setArrLi((prev) => {
      // prev[index].isChecked = !prev[index].isChecked;
      // return [...prev];
      const newArr = prev.map((el) => {
        if (el.id === id) {
          return { ...el, isChecked: !el.isChecked };
        }
        return el;
      });
      return newArr;
    });
  }

  return (
    <li className={classes.li}>
      <input
        className={classes.checkbox}
        onChange={changeChecked}
        checked={isChecked}
        type="checkbox"
      />
      {editing ? (
        <input
          onKeyDown={handleEnter}
          onChange={changeText}
          ref={inp}
          className={classes.fieldEdit}
          value={text}
          type="text"
        />
      ) : (
        <span
          className={
            isChecked
              ? `${classes.textSpan} ${classes.textSpanChecked}`
              : classes.textSpan
          }
        >
          {text}
        </span>
      )}

      <ButsForEdit id={id} setArrLi={setArrLi} setEditing={setEditing} />
    </li>
  );
}
