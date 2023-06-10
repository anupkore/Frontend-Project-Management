import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import * as React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container } from "@mui/material";


export default function Calender(params) {
  return( 
    <>
    <Container>
    <ScheduleComponent >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>
    </Container>
    {/* <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
    </div> */}
    
    </>
  );
}



// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import Badge from '@mui/material/Badge';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay';
// import CheckIcon from '@mui/icons-material/Check';

// export default function Calendar() {
//   const [value, setValue] = useState(new Date());
//   const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <StaticDatePicker
//         // mask='____/__/__'
//         variant='static'
//         orientation='portrait'
//         value={value}
//         disableFuture
//         onChange={(newValue) => setValue(newValue)}
//         renderInput={(params) => {
//           <TextField {...params} />;
//         }}
//         renderDay={(day, _value, DayComponentProps) => {
//           const isSelected =
//             !DayComponentProps.outsideCurrentMonth &&
//             highlightedDays.indexOf(day.getDate()) >= 0;

//           return (
//             <Badge
//               key={day.toString()}
//               overlap='circular'
//               badgeContent={isSelected ? <CheckIcon color='red' /> : undefined}
//             >
//               <PickersDay {...DayComponentProps} />
//             </Badge>
//           );
//         }}
//       />
//     </LocalizationProvider>
//   );
// };