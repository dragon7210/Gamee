import { useState } from "react";
import { names } from "constant";

const Tab = ({ name, index }) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="bg-[#232425] rounded-[15px] p-[5px]">
      {names.map((name, index) => (
        <button
          key={index}
          className={`px-[30px] py-[7px] ${
            tab === index ? "bg-[white]" : "hover:bg-[#5e636e]"
          }   rounded-[15px]`}
          onClick={() => {
            setTab(index);
          }}
        >
          <p className={`${tab === index ? "text-[black]" : "text-[white]"}`}>
            {name}
          </p>
        </button>
      ))}
    </div>
  );
};

export default Tab;
