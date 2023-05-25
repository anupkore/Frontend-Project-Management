import React from "react";
import { Button } from "@mui/material";
import FormDialog from "./Dialog";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

export default function Dashboard() {


  return (
    <>
      <div className="flex">
        <div><SideBar></SideBar></div>
        
        <div className="h-screen flex-1 p-7">
            <h1>HOME PAGE</h1>
            <Link to={"/issues"}>
            <Button variant="contained" >Issues</Button></Link>
            <FormDialog></FormDialog>
        </div>
        
      </div>
      
    </>
  );
}
