import { useEffect, useState } from "react";
import WriteNote from "../WriteNote/WriteNote.jsx";
import classes from "./SectionList.module.css";
import SectionUl from "./SectionUl/SectionUl.jsx";
import image from "../../svg-image/empty.svg";

export default function SectionList() {
  const [inpVal, setInpVal] = useState("");
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
      {arrLi.length === 0 ? (
        <div className={classes.contentImage}>
          <img className={classes.img} src={image} />
          <p className={classes.pEmpty}>Empty...</p>
        </div>
      ) : (
        <SectionUl arrLi={arrLi} setArrLi={setArrLi} />
      )}

      <WriteNote setArrLi={setArrLi} inpVal={inpVal} setInpVal={setInpVal} />
    </section>
  );
}
