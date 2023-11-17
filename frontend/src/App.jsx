import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Error404 from './pages/Error404';
import Footer from './components/Footer';
import CardCompany from './components/CardCompany';
import Contact from './pages/Contact';

function App() {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/detail' element={<CardCompany/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App
