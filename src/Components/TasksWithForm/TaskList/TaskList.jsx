import classes from "./TaskList.module.css";
import { TaskItem } from "../TaskItem/TaskItem.jsx";
import { GlobalContext } from "../../../Page/ToDoList.jsx";
import { useContext } from "react";
import { EmptyContent } from "../../EmptyContent/EmptyContent.jsx";

export function TaskList({ arrLi, setArrLi }) {
  const context = useContext(GlobalContext);

  const forMap = (el) => {
    return (
      <TaskItem
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
        <EmptyContent theme={context.theme} />
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
