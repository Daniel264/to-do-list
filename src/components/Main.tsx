import { CgAdd } from "react-icons/cg";

const Main = () => {
    const taskList = [

    ]
  return (
    <>
      <h1 className="font-semibold text-5xl">Today</h1>
      <hr className="mt-5" />
      <p>
        <CgAdd />
        Add New Task
      </p>
    </>
  );
};

export default Main;
