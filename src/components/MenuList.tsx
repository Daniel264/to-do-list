import { FaTasks } from "react-icons/fa";
import { Tasks } from "../hooks/useMenu";
import { BiCalendar } from "react-icons/bi";
import { CiStickyNote } from "react-icons/ci";
import { MdUpcoming } from "react-icons/md";
const MenuList = () => {
  const tasks: Tasks[] = [
    { id: 1, name: "Upcoming", logo: MdUpcoming },
    { id: 2, name: "Today", logo: FaTasks },
    { id: 3, name: "Calendar", logo: BiCalendar },
    { id: 4, name: "Sticky Wall", logo: CiStickyNote },
  ];
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li className="cursor-pointer py-1 flex text-gray-500 font-medium" key={task.id}>
            {typeof task.logo == "string"
              ? task.logo
              : task.logo && <task.logo className="mt-1 mr-2" />}
            {task.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuList;
