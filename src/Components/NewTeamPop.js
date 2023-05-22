import { Dialog } from "@headlessui/react";
import { DialogContent, DialogTitle } from "@mui/material";
import React from "react";

export default function NewTeamPop(props) {
    const {title,children,openPopup,setOpenPopup} = props;
    return(
        <>
            <Dialog open={openPopup} >
                <DialogTitle>
                    <div>Title goes here</div>
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>        
            </Dialog>
        </>
    )
}