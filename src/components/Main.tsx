import { MdAdd } from "react-icons/md";
// import { Lists } from "../hooks/useList";
// import { BiCalendar } from "react-icons/bi";

const Main = () => {
//   const taskList: Lists[] = [
//     { id: 1, text: "Research content ideas" },
//     { id: 2, text: "Create a database of Guest Authors" },
//     {id: 3, text: "Renew Driver's License",logo
//         : BiCalendar, logo_text: 22-03-22
//      }
//   ];
  return (
    <>
      <div className="h-fit flex justify-center">
          <h1 className="font-semibold text-5xl ">Today</h1>
      </div>
      <hr className="mt-5" />
      <p className="mt-5 flex pl-10">
        <MdAdd  className="mr-4"/>
        Add New Task
      </p>
    </>
  );
};

export default Main;
