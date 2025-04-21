import InputComponent from "../InputComponent/InputComponent";
import classes from "./WriteNote.module.css";
import SvgCreate from "../SVG-picture/SvgCreate/SvgCreate";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { v4 as id } from "uuid";

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
    setArrLi((prevArr) => [
      ...prevArr,
      { val: inpVal, isChecked: false, id: id() },
    ]);
    closer();
  }

  return (
    <>
      <button
        className={classes.but}
        onClick={() => dialog.current.showModal()}
      >
        <SvgCreate />
      </button>
      {createPortal(
        <dialog ref={dialog} className={classes.noteDialog}>
          <div className={classes.allContent}>
            <div className={classes.section1}>
              <h1 className={classes.h1}>NEW NOTE</h1>
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
        </dialog>,
        document.body
      )}
    </>
  );
}
