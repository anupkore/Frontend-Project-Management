import { useState } from "react";

export default function   SideBar(params) {
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Projects", src: "Chart_fill" },
      { title: "Teams", src: "Chat" },
      { title: "Issues", src: "User", gap: true },
      { title: "Workflows", src: "Calendar" },
      { title: "Reports", src: "Chart" },
     
    ];
    return(
        <>
        <div
          className={` ${
            open ? "w-60 h-full" : "w-8"
          } bg-dark-purple h-full p-5  pt-8 relative duration-300`}
        >
          <img
            src="/Images/arrow-right-circle-fill.svg"
            alt=""
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="../"
              alt=""
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              World Class 
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"   
                } `}
              >
                <img src={`/Images/${Menu.src}.png`} alt={`${Menu.src}`}/>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
              
            ))}
          </ul>
        </div>
        </>
    );
}