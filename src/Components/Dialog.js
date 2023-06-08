import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export default function FormDialog({ prop, style, buttonTitle, icon ,variant,ic}) {
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
      <Button variant={variant ==="" ? "" : "contained" } onClick={handleClickOpen}>
          <div className={`flex ${(icon !== "" && ic ==="false") ? "space-x-4" : ""} w-full`}>
                {icon !== "" ? (
                  <div className="m-auto">
                    <img src={icon} alt="" />
                  </div>
                ) : null}
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
