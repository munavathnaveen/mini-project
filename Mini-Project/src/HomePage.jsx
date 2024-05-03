// HomePage.jsx
import React from 'react';
// import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import searchIcon from './assets/loupe.png';
// import { useHistory } from 'react-router-dom'; 
import './HomePage.css';
// import { Link } from 'react-router-dom'; 
// import { useParams } from "react-router-dom";
function HomePage() {
    // const history = useHistory();

    // const handleSearch = () => {
    //     // Navigate to the search page or perform search logic
    //     history.push('/MainPage');
    // }; 

    return (
        <div>
            <Navbar />
   
            <section className="home">
                <div className="home-content">
                    <h1>Welcome to Our Roomies Search</h1>
                    <p>Find the best roommates as per your preference</p>
                </div>
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="search-bar" 
                        style={{ 
                            backgroundImage: `url(${searchIcon})`, 
                            backgroundSize: '20px 20px', 
                            backgroundPosition: '10px center', 
                            backgroundRepeat: 'no-repeat', 
                            paddingLeft: '40px' 
                        }} 
                    />
                    <div className="search-button-home">Search</div>
                    {/* <Link to="/MainPage" className="search-button-home">Search</Link> */}
                </div>
            </section>
            <section>
                <h2 className='heading'>View Rooms in Popular Places</h2>
                <div className='Homemaincard'>  
                    <div className='home-card card1'>
                        <h3 className='textpop'>Hyderabad</h3>
                    </div>
                    <div className='home-card card2'>
                        <h3 className='textpop'>Bangalore</h3>
                    </div>
                    <div className='home-card card3'>
                        <h3 className='textpop'>Mumbai</h3>
                    </div>
                </div> 
            </section>
            <footer>
                <div className="foot-content">
                    <div className="foot_ele footer-links">
                        <a href="/about">About Us</a>
                        <a href="/blogs">Blogs</a>
                        <a href="/reviews">Reviews</a>
                    </div>
                    <div className="foot_ele footer-info">
                        <h4>Contact us </h4>
                        <a href="#contact">at: example@example.com</a>
                    </div>
                    <div className="foot_ele">
                        <p>Address: 123 Street, City, Country</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;