import * as React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import IssueDescription from './IssueDescription';
import { useLocation } from "react-router-dom";

export default function TaskDetail() {
  const { issue_id } = useParams();
  const location = useLocation();
  const { card } = location.state;

  console.log('issue_id:', issue_id);
  console.log('card1..taskdetail:', card);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Button onClick={handleClickOpen}>
          <Card sx={{ minWidth: 200, maxHeight: 130 }} className="shadow-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105">
            <CardContent>
              <p className="text-start text-sm hyphens-auto">
                Title : {card.issue_name}
              </p>
              <p className="text-start text-sm">Type : {card.type}</p>
            </CardContent>
          </Card>
        </Button>
        <div>
        {/* <IssueDescription i_id={3000}  p_id={localStorage.getItem("ProjectID")} p_name={localStorage.getItem("ProjectName")}></IssueDescription>   */}
        <IssueDescription />
        </div>

        <Dialog onClose={handleClose} open={open} maxWidth="xl">
          <DialogTitle sx={{ m: 0, p: 2 }} onClose={handleClose}>
            {/* Dialog title */}
          </DialogTitle>
          <DialogContent>
            {/* Render the issue description component here */}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
