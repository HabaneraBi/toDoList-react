import SectionWrite from "../Components/SectionWrite/SectionWrire.jsx";
import SectionList from "../Components/SectionList/SectionList.jsx";
import { useState, createContext } from "react";

const ContextForSearchAndSelect = createContext();
export { ContextForSearchAndSelect };

export default function App() {
  const [searchVal, setSearchVal] = useState("");
  const [selectVal, setSelectVal] = useState("all");
  return (
    <ContextForSearchAndSelect.Provider
      value={{ searchVal, setSearchVal, selectVal, setSelectVal }}
    >
      <SectionWrite />
      <SectionList />
    </ContextForSearchAndSelect.Provider>
  );
}
