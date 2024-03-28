import React from 'react'
import TextField from '@mui/material/TextField';

const Register = () => {
  return (
    <div>

        <h2>Register</h2>

        <form>
            <TextField  id="outlined-basic" label="First name" variant="outlined" />
            <TextField  id="outlined-basic" label="Last name" variant="outlined" />
            <TextField  id="outlined-basic" label="Email" variant="outlined" />
            <TextField  id="outlined-basic" label="Password" variant="outlined" />
            <TextField  id="outlined-basic" label="First name" variant="outlined" />
        </form>
    </div>
  )
}

export default Register