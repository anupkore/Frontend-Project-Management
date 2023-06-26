import { useState, useEffect } from "react";
import { Link} from "react-router-dom";

export default function SideBar({p_id}) {
  const [open, setOpen] = useState(true);
  const [isResponsive, setIsResponsive] = useState(false);
  const proj_id = Number(localStorage.getItem("ProjectID"));

    const Menus = [
      { title: "Projects", src: "Chart_fill" ,li:"/allprojects"},
      { title: "Teams", src: "Chat",li:"/teams"},
      { title: "Issues", src: "User" ,li:"/allIssues"},
      { title: "Reports", src: "Chart", li:`/reports` },
      {title: "Workflows", src: "Chart_fill" ,li:"/workflow"}
    ];
    const handleResize = () => {
      const isMobile = window.innerWidth <= 764; // Set your desired responsive breakpoint here
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
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
    // handleResize();
  },[isResponsive]);


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
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300 rounded-r-md`}
      >
        <div className="h-full">
          <button onClick={toggleSidebar}>
          <img
            src="/Images/arrow-right-circle-fill.svg"
            alt=""
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
              border-2 rounded-full  ${open && "rotate-180"}`}
            // onClick={toggleSidebar}
          />
          </button>
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
              
              <Link to={`/projectexplore/${proj_id}`} className="hover:text-white">{localStorage.getItem('ProjectName')}</Link>
            </h1>
          </div>
          <div>
            <ul className="pt-6">
              {Menus.map((Menu, index) => (
               
                <Link to={`${Menu.li}`} key={index} 
                  onClick={()=>{
                    if (Menu.li === "/allprojects" ) {
                      localStorage.removeItem("ProjectID") 
                    }
                }}>
                  <li
                    className="flex mt-4 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4"
                  >
                    <img src={`/Images/${Menu.src}.png`} className="" alt={`${Menu.src}`}/>
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
