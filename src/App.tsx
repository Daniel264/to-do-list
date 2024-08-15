import Main from "./components/Main";
import Menu from "./components/Menu";
import "./index.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="bg-gray-100">
          <Menu />
        </div>
        <div>
          <Main />
        </div>
        <div>Aside</div>
      </div>
    </>
  );
}

export default App;
