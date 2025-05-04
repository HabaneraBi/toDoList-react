import classes from "./TaskList.module.css";
import { TaskItem } from "../TaskItem/TaskItem";
import { GlobalContext } from "../../../Page/ToDoList";
import { useContext, FC } from "react";
import { EmptyContent } from "../../EmptyContent/EmptyContent";
import { TypeArrLi, TypeLi, TypeSetArrLi } from "../../../Page/types";

interface TaskListProps {
  arrLi: TypeArrLi;
  setArrLi: TypeSetArrLi;
}

const TaskList: FC<TaskListProps> = ({ arrLi, setArrLi }) => {
  const context = useContext(GlobalContext);
  const forMap = (el: TypeLi) => {
    return (
      <TaskItem
        isChecked={el.isChecked}
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
};

export { TaskList };
