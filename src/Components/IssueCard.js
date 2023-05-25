import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { issues } from './TEST/Issues';
import { Link, useNavigate } from 'react-router-dom';
import IssueDes from './IssueDes';

export default function IssueCard(props) {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
    <Link to={"/issue/"+props.pro.id}>
      <CardContent>
        <Typography gutterBottom  component="div">
          {props.pro.title}
        </Typography>
        <Typography>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className={`${props.pro.priority === "High" ? "fill-red-600" : props.pro.priority === "Medium" ? "fill-red-400" : "fill-red-200"}`} >
  <circle cx="8" cy="8" r="8"/> 
</svg>
      <p className='text-end'>Start Date : {props.pro.startDate}</p>
        </Typography>
      </CardContent>
      </Link> 
    </Card>
    
    </>
  );
}
