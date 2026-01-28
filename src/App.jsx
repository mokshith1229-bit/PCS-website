import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PCSGallery from './pages/PCSGallery';
import Footer from './sections/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import './index.css';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pcs-gallery" element={<PCSGallery />} />
            </Routes>
            <Footer />
            <WhatsAppWidget />
        </div>
    );
}

export default App;
