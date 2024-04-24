import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mainpage } from './pages/Mainpage';
import { Success } from './pages/Success';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/success" element={<Success />}></Route>

        </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
