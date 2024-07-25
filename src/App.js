import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-sans antialiased bg-gray-100">
            <Header />
            <Banner />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
