import { useEffect, useState } from "react";
import WriteNote from "../WriteNote/WriteNote.jsx";
import classes from "./SectionList.module.css";
import SectionUl from "./SectionUl/SectionUl.jsx";

export default function SectionList() {
  const [arrLi, setArrLi] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("info")) {
      setArrLi(JSON.parse(localStorage.getItem("info")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(arrLi));
  }, [arrLi]);

  return (
    <section className={classes.content}>
      <SectionUl arrLi={arrLi} setArrLi={setArrLi} />

      <WriteNote setArrLi={setArrLi} />
    </section>
  );
}
