// // 
// // MainPage.js

// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import './MainPage.css';
// import boy1 from './assets/Profile images/boy1.jpg';
// import girl from './assets/Profile images/girl.jpg';
// import rupee from './assets/rupee.png';
// import axios from 'axios';

// function MainPage() {
//   const [listings, setListings] = useState([]);

//   useEffect(() => {
//     // Fetch listings data when the component mounts
//     const fetchListings = async () => {
//       try {
//         const response = await axios.get('http://localhost:7000/listings');
//         setListings(response.data);
//       } catch (error) {
//         console.error('Failed to fetch listings:', error);
//       }
//     };
//     fetchListings();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className="mainContent">
//         {/* Iterate over listings and render a card for each listing */}
//         {listings.map((listing, index) => (
//           <div key={index} className="peopleCard">
//              <div className="peopleProfile">
//                  {listing.lookingFor === "female" ? (
//                  <img src={girl} alt="girl-img" />
//                 ) : (
//                  <img src={boy1} alt="boy-img" />
//                  )}
//          </div>
//             <div className="profileContent">
//               <div className="profile-name">
//                 <h3>{listing.name}</h3>
//                 {/* Render other listing details */}
//                 <p>{listing.location}</p>
//               </div>
//               <div className="card-row">
//                 <div className="money">
//                   <p>Rent</p>
//                   <div className="rent">
//                     <img src={rupee} alt="rupee" />
//                     <h4>{listing.rent}</h4>
//                   </div>
//                 </div>
//                 <div className="card-info">
//                   <p>Looking for</p>
//                   <h4>{listing.lookingFor}</h4>
//                 </div>
//                 <div className="card-info">
//                   <p>Looking for</p>
//                   <h4>Roommate</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
//         }
// export default MainPage;


// MainPage.js

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './MainPage.css';
import boy1 from './assets/Profile images/boy1.jpg';
import girl from './assets/Profile images/girl.jpg';
import rupee from './assets/rupee.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MainPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch listings data when the component mounts
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:7000/listings');
        setListings(response.data);
      } catch (error) {
        console.error('Failed to fetch listings:', error);
      }
    };
    fetchListings();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mainContent">
        {/* Iterate over listings and render a card for each listing */}
        {listings.map((listing, index) => (
          <Link to={`/Detailedview/${listing._id}`} key={index} className="peopleCard">
            <div className="peopleProfile">
              {listing.lookingFor === "female" ? (
                <img src={girl} alt="girl-img" />
              ) : (
                <img src={boy1} alt="boy-img" />
              )}
            </div>
            <div className="profileContent">
              <div className="profile-name">
                <h3>{listing.name}</h3>
                {/* Render other listing details */}
                <p>{listing.location}</p>
              </div>
              <div className="card-row">
                <div className="money">
                  <p>Rent</p>
                  <div className="rent">
                    <img src={rupee} alt="rupee" />
                    <h4>{listing.rent}</h4>
                  </div>
                </div>
                <div className="card-info">
                  <p>Looking for</p>
                  <h4>{listing.lookingFor}</h4>
                </div>
                <div className="card-info">
                  <p>Looking for</p>
                  <h4>Roommate</h4>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainPage;

// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import './MainPage.css';
// import boy1 from './assets/Profile images/boy1.jpg';
// import girl from './assets/Profile images/girl.jpg';
// import rupee from './assets/rupee.png';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function MainPage() {
//   const [listings, setListings] = useState([]);
//   const navigate = useNavigate(); // Import useNavigate hook

//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         const response = await axios.get('http://localhost:7000/listings');
        
//         setListings(response.data);
//       } catch (error) {
//         console.error('Failed to fetch listings:', error);
//       }
//     };
//     fetchListings();
//   }, []);

//   const handleListingClick = (listingId) => {
//     // Navigate to DetailedView and pass the listing ID as prop
    
//     navigate('/Detailedview/:id', { state: { id: listingId } });
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="mainContent">
//         {listings.map((listing, index) => (
//           <div key={index} className="peopleCard" onClick={() => handleListingClick(listing._id)}>
//             <div className="peopleProfile">
//               {listing.lookingFor === "female" ? (
//                 <img src={girl} alt="girl-img" />
//               ) : (
//                 <img src={boy1} alt="boy-img" />
//               )}
//             </div>
//             <div className="profileContent">
//               <div className="profile-name">
//                 <h3>{listing.name}</h3>
//                 <p>{listing.location}</p>
//               </div>
//               <div className="card-row">
//                 <div className="money">
//                   <p>Rent</p>
//                   <div className="rent">
//                     <img src={rupee} alt="rupee" />
//                     <h4>{listing.rent}</h4>
//                   </div>
//                 </div>
//                 <div className="card-info">
//                   <p>Looking for</p>
//                   <h4>{listing.lookingFor}</h4>
//                 </div>
//                 <div className="card-info">
//                   <p>Looking for</p>
//                   <h4>Roommate</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MainPage;
