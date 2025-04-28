import classesDivBut from "./ButsForEditingListItem.module.css";
import classesPencil from "./StylesForSvgIconsButton/Pencil.module.css";
import classesTrash from "./StylesForSvgIconsButton/Trash.module.css";
import Button from "../Button/Button.jsx";
import Trash from "../../shared/icons/trash.svg?react";
import Pencil from "../../shared/icons/pencil.svg?react";
import { ContextEdit } from "../TasksWithForm/TaskItem/TaskItem.jsx";
import { useContext } from "react";

export default function ButsForEditingListItem({ setEditing, setArrLi, id }) {
  const edit = useContext(ContextEdit);
  function onClickEdit(event) {
    event.preventDefault();
    setEditing((prev) => !prev);
  }

  function onClickDel() {
    setArrLi((prev) => prev.filter((el) => el.id !== id));
  }

  return (
    <div className={classesDivBut.butDiv}>
      <Button onClick={onClickEdit}>
        <Pencil
          className={edit ? classesPencil.svgActive : classesPencil.svg}
        />
      </Button>
      <Button onClick={onClickDel}>
        <Trash className={classesTrash.svg} />
      </Button>
    </div>
  );
}
