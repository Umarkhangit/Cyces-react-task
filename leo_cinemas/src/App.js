import './App.css';
import Register from './Components/Register';
import SignUp from './Components/SignUp';
import MoviesList from './Components/MoviesList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/moviesList' element={<MoviesList/>}/>
      </Routes>
    </div>
  );
}

export default App;
