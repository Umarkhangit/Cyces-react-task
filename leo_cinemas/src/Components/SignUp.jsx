import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate()
    return(
        <div style={{margin:"200px 400px"}}>

            <h2 style={{textAlign:"center"}}>Sign Up</h2>

            <div style={{display:"flex", flexDirection:"column",height:"180px",justifyContent:"space-around"}}>
                <TextField  id="outlined-basic" label="User name" variant="outlined" />
                <TextField  id="outlined-basic" label="Password" variant="outlined" />
            </div>

            <div style={{display:'flex',justifyContent:"center"}}>
                <Button variant="outlined" style={{padding:"10px 40px",borderRadius:"25px"}} onClick={()=>navigate()}>Sign Up</Button>
            </div>

            <div>
                <p>Don't have account? <span onClick={()=>navigate("/register")} style={{color:"blue",cursor:"pointer"}}>Create one</span></p>
            </div>
            
        </div>
    )
}

export default SignUp