import classes from "./ButForEdit.module.css";
import ButForEdit from "./ButForEdit";
import SvgEdit from "./SvgEdit/SvgEdit";
import SvgForDel from "./SvgEdit/SvgForDel";

export default function ButsForEdit() {
  return (
    <div className={classes.butDiv}>
      <ButForEdit>
        <SvgEdit />
      </ButForEdit>
      <ButForEdit>
        <SvgForDel />
      </ButForEdit>
    </div>
  );
}
