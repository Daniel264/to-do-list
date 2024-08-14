import { IoSearch } from "react-icons/io5";
import Task from "./Task";
import List from "./List";
import Tags from "./Tags";
const Menu = () => {
  return (
    <>
      <div className="p-10 relative">
        <h1 className="font-semibold text-2xl pb-5">Menu</h1>
        <input
          className="w-max h-7 pl-7 outline-none"
          placeholder="Search..."
          type="text"
        />
        <IoSearch size={20} className="absolute text-gray-500 top-24  " />
      </div>

      <div className="px-10 py-3">
        <h3 className="font-semibold text-base">TASKS</h3>
        <Task />
      </div>
      <div className="px-10 py-3">
        <h3 className="font-semibold text-base">LISTS</h3>
        <List />
      </div>
      <div className="px-10 py-3">
        <h3 className="font-semibold">TAGS</h3>
        <Tags />
      </div>
      <div className="px-10 pt-20">
        <p>Settings</p>
        <p>Sign out</p>
      </div>
    </>
  );
};

export default Menu;
