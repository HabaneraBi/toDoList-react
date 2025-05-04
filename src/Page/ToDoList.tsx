import { SortingAndHeadingField } from "../Components/SortingAndHeadingField/SortingAndHeadingField";
import { TasksWithForm } from "../Components/TasksWithForm/TasksWithForm";
import { useState, createContext, FC } from "react";
import { TypeArrLi, TypeSetArrLi, SelectVal } from "./types";

interface ValueProps {
  searchVal: string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  selectVal: SelectVal;
  setSelectVal: React.Dispatch<React.SetStateAction<SelectVal>>;
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  arrLi: TypeArrLi;
  setArrLi: TypeSetArrLi;
}

const GlobalContext = createContext<ValueProps>({
  searchVal: "",
  setSearchVal: () => {},
  selectVal: "all",
  setSelectVal: () => {},
  theme: false,
  setTheme: () => {},
  arrLi: [],
  setArrLi: () => {},
});

const ToDoList: FC = () => {
  // from App
  const [searchVal, setSearchVal] = useState("");
  const [selectVal, setSelectVal] = useState<SelectVal>("all");
  const [theme, setTheme] = useState(false);

  // from SectionList
  const [arrLi, setArrLi] = useState<TypeArrLi>([]);
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
};

export { GlobalContext, ToDoList };
