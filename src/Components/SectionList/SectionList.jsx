import { useState } from "react";
import WriteNote from "../WriteNote/WriteNote.jsx";
import classes from "./SectionList.module.css";
import SectionUl from "./SectionUl/SectionUl.jsx";

export default function SectionList() {
  const [inpVal, setInpVal] = useState("");
  const [arrLi, setArrLi] = useState([]);

  return (
    <section className={classes.content}>
      <SectionUl arrLi={arrLi} />
      <WriteNote setArrLi={setArrLi} inpVal={inpVal} setInpVal={setInpVal} />
    </section>
  );
}
