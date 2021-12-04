import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import  Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserPage from './components/UserPage';

function App() {
  
  return (
    <Router>
    <div className="App">
     <Routes>
       <Route exact path="/" element={<Home />}/> 
       <Route exact path='/users/:id' element={<UserPage />}/>   
     </Routes>
    </div>
    </Router>
  );
}

export default App;
