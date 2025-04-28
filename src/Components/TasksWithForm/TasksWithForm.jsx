import { useEffect } from "react";
import TaskForm from "../TaskForm/TaskForm.jsx";
import classes from "./TasksWithForm.module.css";
import TaskList from "./TaskList/TaskList.jsx";
import { GlobalContext } from "../../Page/ToDoList.jsx";
import { useContext } from "react";

export default function TasksWithForm() {
  const context = useContext(GlobalContext);

  useEffect(() => {
    if (localStorage.getItem("info")) {
      context.setArrLi(JSON.parse(localStorage.getItem("info")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(context.arrLi));
  }, [context.arrLi]);

  return (
    <section className={classes.content}>
      <TaskList arrLi={context.arrLi} setArrLi={context.setArrLi} />

      <TaskForm setArrLi={context.setArrLi} />
    </section>
  );
}
