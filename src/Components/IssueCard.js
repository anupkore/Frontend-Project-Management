import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

export default function IssueCard(props) {
  return (
    <>
      <Card sx={{ minWidth: 200, maxHeight: 130 }} className="shadow-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105">
        <Link to={"/issuedes/" + props.pro.Issue_Id} >
          <CardContent>
            <Typography gutterBottom component="div">
              Title : {props.pro.Issue_name} 
            </Typography>
            <Typography>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className={`${
                  props.pro.priority === "High"
                    ? "fill-red-600"
                    : props.pro.priority === "Medium"
                    ? "fill-red-400"
                    : "fill-red-200"
                }`}
              >
                <circle cx="8" cy="8" r="8" />
              </svg> */}
              <p className="text-end">Type : {props.pro.Type}</p>
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  );
}

// export  function IssueCard1(props) {
//   return (
//     <>
//       {/*<!-- Component: Basic image card --> */}
//       <div className="rounded bg-white text-slate-500 shadow-md shadow-slate-200">
//         {/*  <!-- Body--> */}
//         <div className="p-3">
//           <header className="">
//             <h3 className="text-md font-medium text-slate-700">
//               {props.pro.title}
//             </h3>
//             <p className="text-sm text-slate-400">
//               {" "}
//               Start Date {props.pro.startDate}
//             </p>
//           </header>
//           <div className="flex">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               className={`${
//                 props.pro.priority === "High"
//                   ? "fill-red-600"
//                   : props.pro.priority === "Medium"
//                   ? "fill-red-400"
//                   : "fill-red-200"
//               } my-auto mx-2`}
//             >
//               <circle cx="8" cy="8" r="8" />
//             </svg>
//             <h1 className="">{props.pro.priority}</h1>
//           </div>
//         </div>
//       </div>
//       {/*<!-- End Basic image card --> */}
//     </>
//   );
// }
