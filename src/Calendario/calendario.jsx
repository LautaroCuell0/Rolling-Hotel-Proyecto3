import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

 function MyCalendario({setDate}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker  
        disablePast
        onChange={(newValue)=>setDate(newValue)}
      />
    </LocalizationProvider>
  );
}
export default MyCalendario