import React from 'react';
import './AboutPage.css';
import Navbar from './Navbar.jsx';
import aboutImage from './assets/about2.jpg';

function AboutPage() {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                <section className="about-description">
                    <h2>About Us</h2><br />
                    <p>
                    FlateMate is India's fastest growing "Home Rental Network" for finding and
                    renting furnished rooms & furnished shared houses in Hyderabed.

                    FlateMate quite tactfully and skillfully works to provide you with roommate
                    of your taste keeping the compatibility as the numero-uno factor in searching 
                    your roomate.As a user,you can lay down your requirements and perference factor of an optimum roommate.

                    </p>

                   <h2>Blog and Reviews:</h2> <br />
                   <p>
                   We also have an informative blog at 'roomie' blogs and you can find us on social media <br />
                    Facebook:https:://www.facebook.com/flatmate.in <br />
                    LinkedIn:https://www.linkedin.com/company/roomie-in <br />
                    Instagram:https://www.instagram.com/flatmate.in  <br />
                    YouTube:https://www.youtube.com/channel/UCVmp1YybvHpak7i_nMVvYUg
                   </p>
                   
                   
                </section>
                <section className="about-image">
                <img src={aboutImage} alt="About Us" />
                </section>
            </div>
        </div>
    );
}

export default AboutPage;
