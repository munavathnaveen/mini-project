// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import './Detailedview.css';
// import girl from './assets/Profile images/girl.jpg';
// import location from './assets/logo3.jpg';
// import room2 from './assets/room2.jpg';
// import room3 from './assets/room3.jpg';
// import room4 from './assets/room4.jpg';
// import EarlybirdImage from './assets/Habits/Earlybird.jpg';
// import FitnessFreakImage from './assets/Habits/Fitness Freak.jpg';
// import MusicLoverImage from './assets/Habits/Music Lover.jpg';
// import NightowlImage from './assets/Habits/nightowl.jpg';
// import AcImage from './assets/Amenities/Air Conditioner.jpg';
// import PowerImage from './assets/Amenities/PowerBackup.jpg';
// import CookImage from './assets/Amenities/Cook.jpg';
// import ParkingImage from './assets/Amenities/Parking.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const Detailedview = () => {
//   return (
//     <div>
//       <Navbar/>
//       <div className="detailed-container">

//         <div className="left-container">
//           <div className="img-detailed">
//             <img src={girl} alt="girl-img" />
//           </div>
//           <div className='img-description'>
//             Name
//             <a href="mailto:akhilavardholu@gmail.com">Email</a> {/* Anchor tag for email */}
//           </div>
//         </div>

//         <div className="right-container">
//           <div className="person-detailed">
//             <div className='Location-detailed'>
//               <h2>Location</h2>
//               <p><img src={location}></img> Mumbai,Maharashtra,navipet </p>
//             </div>

//           </div>
//           <div className='BasicInfo-detailed'>
//             <div className='basicheading-detailed'>
//               <h2>Basic Info</h2>
//             </div>
//             <div className='para-detailed'>
//               <div>
//                 <p>Gender</p>
//                 <h2>Male</h2>
//               </div>
//               <div>
//                 <p>Approx Rent</p>
//                 <h2>5000</h2>
//               </div>
//               <div>
//                 <p>Occupancy</p>
//                 <h2>Single</h2>
//               </div>
//               <div>
//                 <p>Looking for</p>
//                 <h2>Male</h2>
//               </div>
//             </div>
//           </div>
//           <div className='picture-detailed'>
//             <h3>Pictures</h3>
//             <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
//               <div class="carousel-indicators">
//                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//               </div>
//               <div class="carousel-inner">
//                 <div class="carousel-item active">
//                   <img src={room2} class="d-block w-100" alt="room1img" />
//                 </div>
//                 <div class="carousel-item">
//                   <img src={room3} class="d-block w-100" alt="room2img" />
//                 </div>
//                 <div class="carousel-item">
//                   <img src={room4} class="d-block w-100" alt="room3img" />
//                 </div>
//               </div>
//               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Previous</span>
//               </button>
//               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>

//           <div className='preferences-detailed'>
//             <h3>Preferences</h3>
//             {/* <div className='preferences-row'>
//               <div className='preferences-detailed'><div className="rounded-image-detailed"><img src={EarlybirdImage} alt="Earlybird" /></div><h3>Earlybird</h3></div>
//               <div className='preferences-detailed'><div className="rounded-image-detailed"><img src={NightowlImage} alt="Nightowl" /></div><h3>Nightowl</h3></div>
//               <div className='preferences-detailed'><div className="rounded-image-detailed"><img src={MusicLoverImage} alt="MusicLover" /></div><h3>MusicLover</h3></div>
//               <div className='preferences-detailed'><div className="rounded-image-detailed"><img src={FitnessFreakImage} alt="FitnessFreak" /></div><h3>FitnessFreak</h3></div>
//               <div className='preferences-detailed'><div className="rounded-image-detailed"><img src={FitnessFreakImage} alt="FitnessFreak" /></div><h3>FitnessFreak</h3></div>
//             </div> */}
//             <div className='amen-row'>
//               <div className='amenity'><div className="rounded-image"><img src={EarlybirdImage} alt="EarlybirdImage"/></div><h3>EarlybirdImage</h3></div>
//               <div className='amenity'><div className="rounded-image"><img src={NightowlImage} alt="NightowlImage"/></div><h3>NightowlImage</h3></div>
//               {/* <div className='amenity'><div className="rounded-image"><img src={MusicLoverImage} alt="MusicLoverImage"/></div><h3>MusicLoverImage</h3></div>
//               <div className='amenity'><div className="rounded-image"><img src={FitnessFreakImage} alt="FitnessFreakImage"/></div><h3>FitnessFreakImage</h3></div> */}
//               <div className='amenity'><div className="rounded-image"><img src={FitnessFreakImage} alt="FitnessFreakImage"/></div><h3>FitnessFreakImage</h3></div>
//             </div>
//           </div>
//           <div className='Highlited-detailed'>
//             <h3>Highlights</h3>
//             <div className='highlight-row-detailed' >
//               <div className='perk1-detailed'>No restrictions</div>
//               <div className='perk1-detailed'>Separate washrooms</div>
//               <div className='perk1-detailed'>House keeping</div>
//             </div>
//           </div>
//           <div className='Amenties-detailed'>
//             <h3>Amenties</h3>
//           <div className='amen-row'>
//            <div className='amenity'><div className="rounded-image"><img src={AcImage} alt="AC"/></div><h3>AC</h3></div>
//            <div className='amenity'><div className="rounded-image"><img src={PowerImage} alt="Power Backup"/></div><h3>Power Backup</h3></div>
//            <div className='amenity'><div className="rounded-image"><img src={CookImage} alt="Cook"/></div><h3>Cook</h3></div>
//            <div className='amenity'><div className="rounded-image"><img src={ParkingImage} alt="Parking"/></div><h3>Parking</h3></div>
//          </div>
//           </div>
//           <div className='Description-detailed'></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Detailedview;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Detailedview.css';
import axios from 'axios';
import girl from './assets/Profile images/girl.jpg';
import boy1 from './assets/Profile images/boy1.jpg'
import location from './assets/logo3.jpg';
import room2 from './assets/room2.jpg';
import room3 from './assets/room3.jpg';
import room4 from './assets/room4.jpg';
import { useParams } from 'react-router-dom';


const Detailedview = () => {
  const [listing, setListing] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/listings/${id}`);
        console.log(response.data);
        setListing(response.data);
      } catch (error) {
        console.error("Failed to fetch listing:", error);
      }
    };

    fetchListing();
  }, []);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar/>
      <div className="detailed-container">
        <div className="left-container">
          <div className="img-detailed">
          {listing.lookingFor === "female" ? (
                <img src={girl} alt="girl-img" />
              ) : (
                <img src={boy1} alt="boy-img" />
              )}
          </div>
          <div className='img-description'>
            <h2>{listing.name}</h2>
            <a href={`mailto:${listing.email}`}>{listing.email}</a>
          </div>
        </div>

        <div className="right-container">
          <div className="person-detailed">
            <div className='Location-detailed'>
              <h2>Location</h2>
              <p><img src={location} alt="location-img" /> {listing.location}</p>
            </div>
          </div>

          <div className='BasicInfo-detailed'>
            <div className='basicheading-detailed'>
              <h2>Basic Info</h2>
            </div>
            <div className='para-detailed'>
              <div>
                <p>Gender</p>
                <h2>{listing.gender}</h2>
              </div>
              <div>
                <p>Approx Rent</p>
                <h2>{listing.rent}</h2>
              </div>
              <div>
                <p>Occupancy</p>
                <h2>{listing.occupancy}</h2>
              </div>
              <div>
                <p>Looking for</p>
                <h2>{listing.lookingFor}</h2>
              </div>
            </div>
          </div>

          <div className='picture-detailed'>
            <h3>Pictures</h3>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={room2} className="d-block w-100" alt="room1img" />
                </div>
                <div className="carousel-item">
                  <img src={room3} className="d-block w-100" alt="room2img" />
                </div>
                <div className="carousel-item">
                  <img src={room4} className="d-block w-100" alt="room3img" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className='preferences-detailed'>
            <h3>Preferences</h3>
            <div className='preferences-row'>
              {listing.preferences.map((preference, index) => (
                <div key={index} className='preference-item'>
                  <h3>{preference}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className='Highlited-detailed'>
            <h3>Highlights</h3>
            <div className='highlight-row-detailed'>
              {listing.highlights.map((highlight, index) => (
                <div key={index} className='highlight-item'>
                  <h3>{highlight}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className='Amenties-detailed'>
            <h3>Amenities</h3>
            <div className='amen-row'>
              {listing.amenities.map((amenity, index) => (
                <div key={index} className='amenity'>
                  <h3>{amenity}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailedview;




// import { useParams } from "react-router-dom";
// function Detailedview(){
//   let para=useParams();
//   console.log(para);
//   return(
//     <h1>Hello</h1>
//   )
// }
// export default Detailedview;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function Detailedview() {
//   const [details, setDetails] = useState(null);
//   const { id } = useParams();

//   // Log the received id
//   console.log('Received id:', id);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:7000/listings/${id}`);
//         console.log(response.data);
//         setDetails(response.data);
//       } catch (error) {
//         console.error('Failed to fetch details:', error);
//       }
//     };

//     fetchDetails();
//   }, [id]); // Fetch details whenever the ID changes

//   return (
//     <div>
//       {details ? (
//         <div>
//           <h1>{details.name}</h1>
//           <p>Location: {details.location}</p>
//           <p>Rent: {details.rent}</p>
//           <p>Looking for: {details.lookingFor}</p>
//           {/* Render other details as needed */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Detailedview;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';

// function Detailedview() {
//   const [details, setDetails] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:7000/listings/${id}`);
//         setDetails(response.data);
//       } catch (error) {
//         console.error('Failed to fetch details:', error);
//       }
//     };

//     fetchDetails();
//   }, [id]); 

//   return (
//     <div>
//       {details ? (
//         <div>
//           <Navbar />
//           <div className="detailed-container">
//             <div className="left-container">
//               <div className="img-detailed">
//                 <img src={details.profileImage} alt="profile-img" />
//               </div>
//               <div className='img-description'>
//                 <h2>{details.name}</h2>
//                 <a href={`mailto:${details.email}`}>{details.email}</a>
//               </div>
//             </div>

//             <div className="right-container">
//               <div className="person-detailed">
//                 <div className='Location-detailed'>
//                   <h2>Location</h2>
//                   <p><img src={details.locationImage} alt="location" /> {details.location}</p>
//                 </div>
//               </div>
//               <div className='BasicInfo-detailed'>
//                 <div className='basicheading-detailed'>
//                   <h2>Basic Info</h2>
//                 </div>
//                 <div className='para-detailed'>
//                   <div>
//                     <p>Gender</p>
//                     <h2>{details.gender}</h2>
//                   </div>
//                   <div>
//                     <p>Approx Rent</p>
//                     <h2>{details.rent}</h2>
//                   </div>
//                   <div>
//                     <p>Occupancy</p>
//                     <h2>{details.occupancy}</h2>
//                   </div>
//                   <div>
//                     <p>Looking for</p>
//                     <h2>{details.lookingFor}</h2>
//                   </div>
//                 </div>
//               </div>
//               <div className='picture-detailed'>
//                 <h3>Pictures</h3>
//                 <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//                   <div className="carousel-inner">
//                     {details.photos.map((picture, index) => (
//                       <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//                         <img src={picture} className="d-block w-100" alt={`room-img-${index}`} />
//                       </div>
//                     ))}
//                   </div>
//                   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                   </button>
//                   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                   </button>
//                 </div>
//               </div>
//               <div className='preferences-detailed'>
//                 <h3>Preferences</h3>
//                 <div className='amen-row'>
//                   {details.preferences.map((preference, index) => (
//                     <div className='amenity' key={index}>
//                       <div className="rounded-image"><img src={preference.image} alt={`preference-img-${index}`} /></div>
//                       <h3>{preference.name}</h3>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className='Highlited-detailed'>
//                 <h3>Highlights</h3>
//                 <div className='highlight-row-detailed' >
//                   {details.highlights.map((highlight, index) => (
//                     <div className='perk1-detailed' key={index}>{highlight}</div>
//                   ))}
//                 </div>
//               </div>
//               <div className='Amenties-detailed'>
//                 <h3>Amenities</h3>
//                 <div className='amen-row'>
//                   {details.amenities.map((amenity, index) => (
//                     <div className='amenity' key={index}>
//                       <div className="rounded-image"><img src={amenity.image} alt={`amenity-img-${index}`} /></div>
//                       <h3>{amenity.name}</h3>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Detailedview;
