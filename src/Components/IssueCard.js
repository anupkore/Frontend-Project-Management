import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IssueContext } from "./IssueContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function IssueCard({ card }) {
  const { setIssueCard } = useContext(IssueContext);

  const handleClick = () => {
    setIssueCard(card);
  };

export default function IssueCard(props) {
  console.log("card",props);


  return (
    <Link to={`/task/${card.issue_id}`} onClick={handleClick}>
      {/* Card content */}
      <Card
        sx={{ minWidth: 200, maxHeight: 130 }}
        className="shadow-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105"
      >
        <CardContent>
          <p className="text-start text-sm hyphens-auto">
            Title: {card.issue_name}
          </p>
          <p className="text-start text-sm">Type: {card.type}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
