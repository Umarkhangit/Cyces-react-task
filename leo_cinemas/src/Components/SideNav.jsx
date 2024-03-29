import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const SideNav = () => {
  return (
    <div style={{width:"20%",margin:"5% 2%"}}>

        <Stack spacing={2}>
            <Button variant="outlined">Account</Button>
            <Button variant="outlined">Timings</Button>
            <Button variant="outlined">Seats</Button>
            <Divider sx={{ bgcolor:"black" }}/>
        </Stack>

    </div>
  )
}

export default SideNav