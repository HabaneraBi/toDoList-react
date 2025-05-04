import { FC } from "react";
import { SelectVal } from "../../Page/types";
import classes from "./FilterDropdown.module.css";

interface FilterDropdownProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectVal: SelectVal;
}

const FilterDropdown: FC<FilterDropdownProps> = ({ onChange, selectVal }) => {
  return (
    <div className={classes.forSelect}>
      <select onChange={onChange} value={selectVal} className={classes.select}>
        <option value="all">ALL</option>
        <option value="complete">Complete</option>
        <option value="inComplete">Incomplete</option>
      </select>
    </div>
  );
};

export { FilterDropdown };
