import classes from "./TaskItem.module.css";
import { ButsForEditingListItem } from "../../ButsForEditingListItem/ButsForEditingListItem.js";
import {
  useState,
  useRef,
  useEffect,
  createContext,
  FC,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { TypeSetArrLi } from "../../../Page/types.js";

interface TaskItemProps {
  text: string;
  setArrLi: TypeSetArrLi;
  id: string;
  isChecked: boolean;
}

const ContextEdit = createContext<boolean>(false);

const TaskItem: FC<TaskItemProps> = ({ text, setArrLi, id, isChecked }) => {
  const [editing, setEditing] = useState(false);
  const [inpVal, setInpVal] = useState(text);
  const inp = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inp.current?.focus();
    inp.current?.select();
    console.log(editing, "from TaskItem");
  }, [editing]);

  function handleEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setEditing(false);
      setArrLi((prev) => {
        const newArr = prev.map((el) => {
          if (el.id === id) {
            return { ...el, val: inpVal };
          }
          return el;
        });
        return newArr;
      });
    }
  }

  function changeText(e: ChangeEvent<HTMLInputElement>) {
    setInpVal(e.target.value);
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
};

export { ContextEdit, TaskItem };
