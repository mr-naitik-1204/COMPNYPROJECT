import logo from './logo.svg';
import './App.css';
import Lending from './componet/Lending';
import Contect from './componet/Contect';
import About from './componet/About';
import Blog from './componet/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gotop from './componet/Gotop';
import Resrvation from './componet/Resrvation';
import Manu from './componet/Manu';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lending />}>
          </Route>
          <Route path="/MENU" element={<Manu />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/CONTACT" element={<Contect />}>
          </Route>
          <Route path="/blog" element={<Blog />}>
          </Route>
          <Route path="/RESERVATION" element={<Resrvation />}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Gotop />



    </>
  );
}

export default App;
