import React from 'react';
import About from './components/About';
import Footer from './components/footer';
import Info from './components/info';
import Interest from './components/interests';

export default function App(){
    return(
    <div className='container'>
        <div className='card-container'>
        <Info />
        <div className='card-info'>
        <About />
        <Interest />
        </div>
        <Footer />
        </div>
    </div>
    )
}