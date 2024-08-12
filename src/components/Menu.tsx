import { IoSearch } from "react-icons/io5";

const Menu = () => {
  return (
    <>
      <div className="p-10 relative">
        <h1 className="font-semibold text-2xl pb-5">Menu</h1>
        <input className="w-max h-7 pl-7 outline-none" placeholder="Search..." type="text" />
        <IoSearch size={20} className="absolute text-gray-500 top-24  "/>
      </div>
    </>
  );
};

export default Menu;
