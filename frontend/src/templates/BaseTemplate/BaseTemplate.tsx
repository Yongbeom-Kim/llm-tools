import { Children } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

type BaseTemplateProps = {
  children: React.ReactNode;
};
const BaseTemplate: React.FC<BaseTemplateProps> = ({ children }) => {
  const child = Children.only(children);
  return (
    <div className="absolute w-screen h-screen bg-primary-50 flex flex-row">
      <Sidebar />
      <div className={`block w-auto m-0 flex-grow`}>
        <Navbar />
        <div className="p-4">{child}</div>
      </div>
    </div>
  );
};

export default BaseTemplate;
