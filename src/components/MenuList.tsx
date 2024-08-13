import { FaTasks } from "react-icons/fa";
import { IconType } from "react-icons";
import { Tasks } from "../hooks/useMenu";
import Menu from "./Menu";

const MenuList = () => {
  const tasks: Tasks[] = [
    { id: 1, name: "Upcoming", logo: "" },
    { id: 2, name: "Today", logo: FaTasks },
    { id: 3, name: "Calendar", logo: "" },
    { id: 4, name: "Sticky Wall", logo: "" },
  ];
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li className="cursor-pointer py-1" key={task.id}>
            {typeof task.logo == "string"
              ? task.logo
              : task.logo && <task.logo />}
            {task.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuList;
