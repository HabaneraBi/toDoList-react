import classes from "./TaskItem.module.css";
import { ButsForEditingListItem } from "../../ButsForEditingListItem/ButsForEditingListItem.jsx";
import { useState, useRef, useEffect, createContext } from "react";

const ContextEdit = createContext();

function TaskItem({ text, setArrLi, id, isChecked }) {
  console.log("li");
  const [editing, setEditing] = useState(false);
  const [inpVal, setInpVal] = useState(text);
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
    setInpVal(e.target.value);
    // setArrLi((prev) => {
    //   const newArr = prev.map((el) => {
    //     if (el.id === id) {
    //       return { ...el, val: e.target.value };
    //     }
    //     return el;
    //   });
    //   return newArr;
    // });
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
          value={inpVal}
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
          inpVal={inpVal}
        />
      </ContextEdit.Provider>
    </li>
  );
}

export { ContextEdit, TaskItem };
