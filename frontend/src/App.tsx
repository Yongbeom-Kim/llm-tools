import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="absolute justify-center grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-5 w-screen h-screen bg-black">
      <Sidebar />
    </div>
  );
}

export default App;
