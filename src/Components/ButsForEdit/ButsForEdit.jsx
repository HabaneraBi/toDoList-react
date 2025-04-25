import classes from "./ButForEdit.module.css";
import ButForEdit from "./ButForEdit";
import SvgEdit from "../SVG-picture/SvgEdit/SvgEdit";
import SvgForDel from "../SVG-picture/SvgDel/SvgForDel";

export default function ButsForEdit({ setEditing, setArrLi, id }) {
  function onClickEdit(event) {
    event.preventDefault();
    setEditing((prev) => !prev);
  }

  function onClickDel() {
    setArrLi((prev) => prev.filter((el) => el.id !== id));
  }

  return (
    <div className={classes.butDiv}>
      <ButForEdit onClick={onClickEdit}>
        <SvgEdit />
      </ButForEdit>
      <ButForEdit onClick={onClickDel}>
        <SvgForDel />
      </ButForEdit>
    </div>
  );
}
