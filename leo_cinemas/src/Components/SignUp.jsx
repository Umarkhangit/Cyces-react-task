import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

    const [signUpData,setSignUpData] = useState({
        username:"",
        password:""
    })

    const handleChange = (e)=>{
        setSignUpData({...signUpData,[e.target.name]:e.target.value})
    }

    const navigate = useNavigate()

    const handleLogin = ()=>{
        if(signUpData.username == "" || signUpData.password == ""){
            alert("Please fill the details")
        }else{
        axios.post("http://localhost:3100/user",signUpData)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))

        navigate("/moviesList",{state:signUpData})
        }
    }

    return(
        <div style={{margin:"200px 400px"}}>

            <h2 style={{textAlign:"center"}}>Sign Up</h2>

            <div style={{display:"flex", flexDirection:"column",height:"180px",justifyContent:"space-around"}}>
                <TextField  id="outlined-basic" label="User name" variant="outlined" name="username" value={signUpData.username} onChange={handleChange}/>
                <TextField  id="outlined-basic" label="Password" variant="outlined" name="password" value={signUpData.password} onChange={handleChange}/>
            </div>

            <div style={{display:'flex',justifyContent:"center"}}>
                <Button variant="outlined" style={{padding:"10px 40px",borderRadius:"25px"}} onClick={handleLogin}>Sign Up</Button>
            </div>


            
        </div>
    )
}

export default SignUp