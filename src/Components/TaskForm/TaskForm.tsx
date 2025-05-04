import { Input } from "../Input/Input";
import classes from "./TaskForm.module.css";
import SvgCreate from "../../shared/icons/createNewToDo.svg?react";
import { ChangeEvent, KeyboardEventHandler, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { v4 as id } from "uuid";
import { TypeSetArrLi } from "../../Page/types";

export function TaskForm({ setArrLi }: { setArrLi: TypeSetArrLi }) {
  const [inpVal, setInpVal] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  function closer() {
    dialog.current?.close();
    setInpVal("");
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setInpVal(event.target.value);
  }

  function transInfoForLi() {
    if (inpVal.trim() === "") {
      return;
    }
    setArrLi((prevArr) => [
      ...prevArr,
      { val: inpVal, isChecked: false, id: id() },
    ]);
    closer();
  }

  const onKey: KeyboardEventHandler = (e) => {
    if (e.key === "Escape") {
      closer();
    } else if (e.key === "Enter") {
      e.preventDefault();
      transInfoForLi();
    }
  };

  return (
    <>
      <button
        className={classes.but}
        onClick={() => dialog.current?.showModal()}
      >
        <SvgCreate />
      </button>
      {createPortal(
        <dialog ref={dialog} className={classes.noteDialog}>
          <div className={classes.allContent}>
            <div className={classes.section1}>
              <h1 className={classes.h1}>NEW NOTE</h1>
              <Input
                onChange={onChange}
                onKey={onKey}
                val={inpVal}
                parentWidth={466}
                width={440}
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
