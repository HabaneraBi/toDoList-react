import { SortingAndHeadingField } from "../Components/SortingAndHeadingField/SortingAndHeadingField.jsx";
import { TasksWithForm } from "../Components/TasksWithForm/TasksWithForm.jsx";
import { useState, createContext } from "react";

const GlobalContext = createContext();

function ToDoList() {
  // from App
  const [searchVal, setSearchVal] = useState("");
  const [selectVal, setSelectVal] = useState("all");
  const [theme, setTheme] = useState(false);

  // from SectionList
  const [arrLi, setArrLi] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        searchVal,
        setSearchVal,
        selectVal,
        setSelectVal,
        theme,
        setTheme,
        arrLi,
        setArrLi,
      }}
    >
      <SortingAndHeadingField />
      <TasksWithForm />
    </GlobalContext.Provider>
  );
}

export { GlobalContext, ToDoList };
