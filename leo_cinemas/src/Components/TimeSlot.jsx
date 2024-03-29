import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const TimeSlot = ({selectedmovie}) => {
  return (
    <div style={{width:"70%",margin:"9% 3%"}}>

        <h1 style={{marginBottom:"3%"}}>{selectedmovie?.movieName}</h1>
        <p style={{marginBottom:"2%"}}>Please select your time slot</p>
        
        <Stack direction="row" spacing={4}>
            {
                selectedmovie?.showTimings.map((val)=>{
                    return <Box sx={{bgcolor:"lightGrey",p:"10px 30px",cursor:"pointer"}}>{val}</Box>
                })
            }
        </Stack>
        
    </div>
  )
}

export default TimeSlot