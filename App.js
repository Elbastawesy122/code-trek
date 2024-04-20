import logo from './logo.svg';
import './App.css';
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Details from './componant/details/Details';



function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<Details/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
 