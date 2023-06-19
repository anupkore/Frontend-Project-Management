import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import CustomizedDialogs from "./IssueDialog";

export default function IssueCard(props) {
  return (
    <>

      <Card sx={{ minWidth: 200, maxHeight: 130 }} className="shadow-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105">
        {/* <Link to={"/issuedes/" + props.pro.Issue_Id} > */}
          <CardContent>
            <Typography gutterBottom component="div">
              Title : {props.pro.Issue_name}
              {/* Title : {"props.pro.Issue_name"}  */}
            </Typography>
            <Typography>
              <p className="text-end">Type : {props.pro.Type}</p>
              {/* <p className="text-end">Type : {"props.pro.Type"}</p> */}
            </Typography>
          </CardContent>
        {/* </Link> */}
      </Card>
    </>
  );
}
