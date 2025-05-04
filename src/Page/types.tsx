interface TypeLi {
  val: string;
  isChecked: boolean;
  id: string;
}

type TypeArrLi = TypeLi[];

type TypeSetArrLi = React.Dispatch<React.SetStateAction<TypeArrLi>>;

type SelectVal = "all" | "complete" | "inComplete";

export type { TypeArrLi, TypeLi, TypeSetArrLi, SelectVal };
