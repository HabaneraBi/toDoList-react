import classes from "./TaskItem.module.css";
import ButsForEditingListItem from "../../ButsForEditingListItem/ButsForEditingListItem.jsx";
import { useState, useRef, useEffect, createContext } from "react";

const ContextEdit = createContext();
export { ContextEdit };

export default function TaskItem({ text, setArrLi, id, isChecked }) {
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
      <ContextEdit.Provider value={editing}>
        <ButsForEditingListItem
          id={id}
          setArrLi={setArrLi}
          setEditing={setEditing}
        />
      </ContextEdit.Provider>
    </li>
  );
}
