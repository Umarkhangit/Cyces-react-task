import './App.css';
import SignUp from './Components/SignUp';
import MoviesList from './Components/MoviesList';
import { Route, Routes } from 'react-router-dom';
import Booking from './Components/Booking';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/moviesList' element={<MoviesList/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>

    </div>
  );
}

export default App;
