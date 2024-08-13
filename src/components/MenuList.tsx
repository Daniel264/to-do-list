

const MenuList = () => {
  const tasks = [
    { id: 1, name: "Upcoming" },
    { id: 2, name: "Today" },
    { id: 3, name: "Calendar" },
    { id: 4, name: "Sticky Wall" },
  ];
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </>
  );
};

export default MenuList;
