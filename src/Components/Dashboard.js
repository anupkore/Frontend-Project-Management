import React from "react";
import { Button } from "@mui/material";
import FormDialog from "./Dialog";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { Teams } from "./Teams";

export default function AdminDashboard() {


  return (
    <>
      <div className="">
        
        <div className="h-screen">
            <Teams></Teams>
        </div>
        
      </div>
      
    </>
  );
}
