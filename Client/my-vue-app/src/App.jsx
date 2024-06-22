import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './component/Signup.jsx';
import Login from './component/Login.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
