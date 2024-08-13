import { Lists } from "../hooks/useMenu";
import { GrPersonalComputer } from "react-icons/gr";
import { BsList } from "react-icons/bs";
import { MdWork, MdAdd } from "react-icons/md";

const List = () => {
  const lists: Lists[] = [
    { id: 1, name: "Personal", logo: GrPersonalComputer },
    { id: 2, name: "Work", logo: MdWork },
    { id: 3, name: "List", logo: BsList },
    { id: 4, name: "Add new List", logo: MdAdd },
  ];
  return (
    <>
      <ul>
        {lists.map((list) => (
          <li
            className="cursor-pointer py-1 flex text-gray-500 font-medium"
            key={list.id}
          >
            {" "}
            {typeof list.logo == "string"
              ? list.logo
              : list.logo && <list.logo className="mt-1 mr-2" />}
            {list.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
