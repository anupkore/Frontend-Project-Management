import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SideBar(props) {
  const [open, setOpen] = useState(true);
  const [isResponsive, setIsResponsive] = useState(false);
  const Menus = [
      { title: "Projects", src: "Chart_fill" ,li:"/allprojects"},
      { title: "Teams", src: "Chat",li:"/teams"},
      { title: "Issues Workflow", src: "User" ,li:`/projectexplore/issues/${props.p_id}`},
      { title: "Reports", src: "Chart", li:`/reports` },
      { title: "Admin DashBoard", src: "Chart_fill" ,li:"/dashboard"},
    ];
    const handleResize = () => {
    const isMobile = window.innerWidth <= 768; // Set your desired responsive breakpoint here
    setIsResponsive(isMobile);
    if (isMobile && open) {
      setOpen(false);
    }
    else{
      setOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const toggleSidebar = () => {
    if (!isResponsive) {
      setOpen(!open);
    }
  };

  return (
    <>
      <div
        className={`${
          open ? "w-60" : "w-8"
        } bg-dark-purple h-full p-5  pt-8 relative duration-300 rounded-r-md`}
      >
        <div className="h-full">
          <img
            src="/Images/arrow-right-circle-fill.svg"
            alt=""
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
              border-2 rounded-full  ${open && "rotate-180"}`}
            onClick={toggleSidebar}
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
          <div>
            <ul className="pt-6">
              {Menus.map((Menu, index) => (
                <Link to={`${Menu.li}`} key={index}>
                  <li
                    className="flex mt-4 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4"
                  >
                    <img src={`/Images/${Menu.src}.png`} className="" />
                    <span
                      className={`${!open && "hidden"} origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
