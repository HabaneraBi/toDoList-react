import InputComponent from "../InputComponent/InputComponent";
import classes from "./WriteNote.module.css";
import { useRef } from "react";

export default function WriteNote({ inpVal, setInpVal, setArrLi }) {
  const dialog = useRef(null);
  function closer() {
    dialog.current.close();
    setInpVal("");
  }

  function onChange(event) {
    setInpVal(event.target.value);
  }

  function transInfoForLi() {
    setArrLi((prevArr) => [...prevArr, inpVal]);
    closer();
  }

  return (
    <>
      <button
        className={classes.but}
        onClick={() => dialog.current.showModal()}
      >
        +
      </button>

      <dialog ref={dialog} className={classes.noteDialog}>
        <div className={classes.allContent}>
          <div className={classes.section1}>
            <h1>NEW NOTE</h1>
            <InputComponent
              onChange={onChange}
              val={inpVal}
              width="440px"
              placeholder="Input your note..."
            />
          </div>
          <div className={classes.divButs}>
            <button className={classes.cancel} onClick={closer}>
              CANCEL
            </button>
            <button className={classes.apply} onClick={transInfoForLi}>
              APPLY
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
