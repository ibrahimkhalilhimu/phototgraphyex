import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Navbar/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Services/>
            <Footer/>
        </div>
    );
};

export default Home;