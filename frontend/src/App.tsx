import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <div className="absolute w-screen h-screen bg-very-dark-primary flex flex-row">
      <Sidebar active={sidebarActive} setActive={setSidebarActive} />
      <div className={`block w-auto m-0 flex-grow`}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
