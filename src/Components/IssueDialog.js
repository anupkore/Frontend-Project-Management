import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import IssueDescription from './IssueDescription';
import IssueCard from './IssueCard';
import { SyncLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { CallMissedOutgoing } from '@mui/icons-material';
import AuthenticationService from '../Services/AuthenticationService';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({card}) {
  const [open, setOpen] = React.useState(false);
console.log("Card...issuedialog",card);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const maxWidth = "xl";
  const proj_id = Number(localStorage.getItem("ProjectID"));

  return (
    <div>
      <Button  onClick={handleClickOpen}>
            <IssueCard card={card}></IssueCard>
            {/* {card} */}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={maxWidth}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
        </BootstrapDialogTitle>
        <DialogContent>
            {/* <IssueDescription i_id={3000}  p_id={localStorage.getItem("ProjectID")} p_name={localStorage.getItem("ProjectName")}></IssueDescription>      */}
            <IssueDescription />     
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}