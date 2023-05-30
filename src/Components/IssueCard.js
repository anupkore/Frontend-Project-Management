import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

export default function IssueCard(props) {
  return (
    <>
      <Card sx={{ minWidth: 200, maxHeight: 130 }}>
        <Link to={"/issuedes/" + props.pro.id}>
          <CardContent>
            <Typography gutterBottom component="div">
              {props.pro.title}
            </Typography>
            <Typography>
              <svg
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
              </svg>
              <p className="text-end">Start Date : {props.pro.startDate}</p>
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  );
}
