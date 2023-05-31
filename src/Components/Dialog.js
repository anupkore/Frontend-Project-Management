import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

export default function FormDialog({ prop, style, buttonTitle, icon ,variant}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="w-full">
      <Button wid variant={variant ==="" ? "" : "contained" } onClick={handleClickOpen}>
        <div className="flex space-x-4 w-full">
          <div className="my-auto">
            <img src={icon} alt=""></img>
          </div>
          <div className=" flex my-auto">{buttonTitle}</div>
        </div>
      </Button>
      </div>
      
      <Dialog open={open} onClose={handleClose} maxWidth={style} fullWidth>
        <DialogContent>{prop}</DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
