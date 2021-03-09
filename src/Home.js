import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                className="home__image"
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt=""
                />

                <div className="home__row">
                    <Product 
                        id="123"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' 
                        price={11.96}
                        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                        rating={3}
                    />
                    <Product 
                        id="141"
                        title='Kenwood kMix Stand Mixer for 
                        Baking, Stylish Kitchen Mixer 
                        with K-beater, Dough Hook and Whisk, 5 Litre 
                        Glass Bowl' 
                        price={239.0}
                        image='https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg'
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="5235"
                        title='New Apple Watch Series 6 (GPS, 40mm) - Blue Aluminium Case with Deep Navy Sport Band'
                        price={399.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71HobIyTcqL._AC_SL1500_.jpg'
                        rating={4}
                    />
                    <Product 
                        id="253"
                        title='All-new Echo (4th generation) | 
                        With premium sound, smart home hub and 
                        Alexa | Charcoal'
                        price={99.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/61eVarljQcL._AC_SL1000_.jpg'
                        rating={5}
                    />
                    <Product 
                        id="2653"
                        title='New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Grey (4th Generation)'
                        price={249.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81WhK5%2Bgf2L._AC_SL1500_.jpg'
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="642353"
                        title='Samsung LC49RG90SSUXEN 49" Curved LED 
                        Gaming Monitor - Super Ultra Wide Dual WQHD 
                        5120 x 1440, 120Hz, Freesync, Gsync Compatible, 
                        HDMI, 2 x Displayport, USB, Dark Blue Grey'
                        price={199.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg'
                        rating={4}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
