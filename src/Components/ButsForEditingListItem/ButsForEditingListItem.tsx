import classesDivBut from "./ButsForEditingListItem.module.css";
import classesPencil from "./StylesForSvgIconsButton/Pencil.module.css";
import classesTrash from "./StylesForSvgIconsButton/Trash.module.css";
import { Button } from "../Button/Button";
import Trash from "../../shared/icons/trash.svg?react";
import Pencil from "../../shared/icons/pencil.svg?react";
import { ContextEdit } from "../TasksWithForm/TaskItem/TaskItem";
import { FC, useContext } from "react";
import { TypeSetArrLi } from "../../Page/types";

interface ButsForEditingListItemProps {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setArrLi: TypeSetArrLi;
  id: string;
  inpVal: string;
}

const ButsForEditingListItem: FC<ButsForEditingListItemProps> = ({
  setEditing,
  setArrLi,
  id,
  inpVal,
}) => {
  const edit = useContext(ContextEdit);
  function onClickEdit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setEditing((prev) => !prev);
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
};

export { ButsForEditingListItem };
