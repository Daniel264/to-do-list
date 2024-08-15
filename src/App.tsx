import Main from "./components/Main";
import Menu from "./components/Menu";
import "./index.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="w-2/3 bg-gray-100">
          <Menu />
        </div>
        <div className="w-1/3">
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
