import React,{useState, useEffect} from 'react'
import SideNav from './SideNav'
import TimeSlot from './TimeSlot'
import Divider from '@mui/material/Divider';
import { useLocation } from 'react-router-dom';


const Booking = () => {
    const [selectedmovie,setSelectedMovie] = useState()

    const location = useLocation();
    
    useEffect(()=>{
        setSelectedMovie(location.state)
    },[location.state])
    
    
  return (
    <div style={{display:"flex",height:"700px"}}>

        <SideNav/>

        <Divider orientation="vertical" flexItem sx={{ bgcolor:"black" }}/>
        
        <TimeSlot selectedmovie={selectedmovie}/>
    </div>
  )
}

export default Booking