import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import PageCompany from './pages/PageCompany'
import Error404 from './pages/Error404';
import Footer from './components/Footer';
import CardCompany from './components/CardCompany';
import Contact from './pages/Contact';
import About from './pages/About';
import Inicio from './pages/Inicio';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/company/:page' element={<PageCompany />} />
                <Route path='/detail/:id' element={<CardCompany />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About/>}/>
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
