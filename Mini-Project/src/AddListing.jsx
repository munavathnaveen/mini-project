// import React from 'react';
// import './AddListing.css';
// import TvImage from './assets/Amenities/Tv.jpg';
// import FridgeImage from './assets/Amenities/Fridge.jpg';
// import KitchenImage from './assets/Amenities/Kitchen.jpg';
// import WifiImage from './assets/Amenities/Wifi.jpg';
// import MachineImage from './assets/Amenities/washing machine.jpg';
// import AcImage from './assets/Amenities/Air Conditioner.jpg';
// import PowerImage from './assets/Amenities/PowerBackup.jpg';
// import CookImage from './assets/Amenities/Cook.jpg';
// import ParkingImage from './assets/Amenities/Parking.jpg';

// const AddListing = () => {
//   return (
//     <div className="add-room-details">
//       <h1>Add Your Room Details</h1>
//       <p>So that other users can contact you.</p>
//       <form>
//         {/* Location and looking for section */}
//         <div className='form-row'>
//           <div className="form-group">
//             <label htmlFor="location">Add Your Location</label>
//             <input type="text" id="location" name="location" placeholder="Add Location" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="looking-for">Looking For</label>
//             <select name="looking-for" id="looking-for">
//               <option value="female">Female</option>
//               <option value="male">Male</option>
//               <option value="any">Any</option>
//             </select>
//           </div>
//         </div>

//         {/* Rent and occupancy section */}
//         <div className='form-row'>
//           <div className="form-group">
//             <label htmlFor="rent">Approx Rent</label>
//             <input type="number" id="rent" name="rent" placeholder="₹5000" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="occupancy">Occupancy</label>
//             <select name="occupancy" id="occupancy">
//               <option value="single">Single</option>
//               <option value="shared">Shared</option>
//               <option value="any">Any</option>
//             </select>
//           </div>
//         </div>

//         {/* Upload photos section */}
//         <div className="form-group">
//           <label htmlFor="photos">Upload 3 Photos of your room</label>
//           <input type="file" id="photos" name="photos" multiple />
//           <p>Click or Drag Images To Upload (JPG, PNG, JPEG)</p>
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       {/* Choose highlights section */}
//       <div>
//         <h2>Choose Highlights for your room</h2>
//         <div className='highlightbtn'>
//           <div className='highlight-row'>
//             {/* Highlights */}
//             <div className='perk1'>Attached Washroom</div>
//             <div className='perk1'>Market nearby</div>
//             <div className='perk1'>Attached balcony</div>
//             <div className='perk1'>Close to metro station</div>
//             <div className='perk1'>Public transport nearby</div>
//           </div>
//           <div className='highlight-row' >
//             <div className='perk1'>No restrictions</div>
//             <div className='perk1'>Separate washrooms</div>
//             <div className='perk1'>House keeping</div>
//             <div className='perk1'>Gym nearby</div>
//             <div className='perk1'>Park nearby</div>
//           </div>
//         </div>
//       </div>

//       {/* Amenities section */}
//       <div className='amenities'>
//         <div className='amen-row'>
//           <div className='amenity'><div className="rounded-image"><img src={TvImage} alt="TV"/></div><h3>TV</h3></div>
//           <div className='amenity'><div className="rounded-image"><img src={FridgeImage} alt="Fridge"/></div><h3>Fridge</h3></div>
//           <div className='amenity'><div className="rounded-image"><img src={KitchenImage} alt="Kitchen"/></div><h3>Kitchen</h3></div>
//           <div className='amenity'><div className="rounded-image"><img src={WifiImage} alt="Wifi"/></div><h3>Wifi</h3></div>
//           <div className='amenity'><div className="rounded-image"><img src={MachineImage} alt="Washing Machine"/></div><h3>Washing Machine</h3></div>
//         </div>
//         <div className='amen-row'>
//           <div className='amenity'><div className="rounded-image"><img src={AcImage} alt="AC"/></div><h3>AC</h3></div>
//           <div className='amenity'><div className="rounded-image"><img src={PowerImage} alt="Power Backup"/></div><h3>Power Backup</h3></div>
//           <div className='amenity'><div className="rounded-image"><img src={CookImage} alt="Cook"/></div><h3>Cook</h3></div>
//           <div className='amenity'><div className="rounded-image"><img src={ParkingImage} alt="Parking"/></div><h3>Parking</h3></div>
//         </div>
//       </div>
//       <h2>Description</h2>
//       <div className='Description-container'>
//       </div>
//         {/* <button className='btn' type="submit">Submit</button> */}
//         <div className='submitbtn'>
//           Submit
//         </div>
//     </div>
//   );
// };

// export default AddListing;


import React, { useState } from 'react';
import './AddListing.css';
import axios from 'axios';
import TvImage from './assets/Amenities/Tv.jpg';
import FridgeImage from './assets/Amenities/Fridge.jpg';
import KitchenImage from './assets/Amenities/Kitchen.jpg';
import WifiImage from './assets/Amenities/Wifi.jpg';
import MachineImage from './assets/Amenities/washing machine.jpg';
import AcImage from './assets/Amenities/Air Conditioner.jpg';
import PowerImage from './assets/Amenities/PowerBackup.jpg';
import CookImage from './assets/Amenities/Cook.jpg';
import ParkingImage from './assets/Amenities/Parking.jpg';
import EarlybirdImage from './assets/Habits/Earlybird.jpg';
import FitnessFreakImage from './assets/Habits/Fitness Freak.jpg';
import MusicLoverImage from './assets/Habits/Music Lover.jpg';
import NightowlImage from './assets/Habits/nightowl.jpg';
import NonAlcoholicImage from './assets/Habits/Non Alcoholic.jpg';
import NonSmokerImage from './assets/Habits/Non Smoker.jpg';
import PartyLoverImage from './assets/Habits/Party Lover.jpg';
import PetLoverImage from './assets/Habits/Pet Lover.jpg';
import SportyImage from './assets/Habits/Sporty.jpg';
import StudiousImage from './assets/Habits/Studious.jpg';
import VeganImage from './assets/Habits/Vegan.jpg';
import WandererImage from './assets/Habits/Wanderer.jpg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import XMarkIcon from './XMarkIcon';
import { useNavigate } from 'react-router-dom'; 





const AddListing = () => {
  const [location, setLocation] = useState('');
  const [lookingFor, setLookingFor] = useState('female');
  const [rent, setRent] = useState('');
  const [occupancy, setOccupancy] = useState('single');
  const [photos, setPhotos] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  const handleHighlightClick = (highlight) => {
    const updatedHighlights = [...highlights];
    if (updatedHighlights.includes(highlight)) {
      updatedHighlights.splice(updatedHighlights.indexOf(highlight), 1);
    } else {
      updatedHighlights.push(highlight);
    }
    setHighlights(updatedHighlights);
  };

  const handleAmenityClick = (amenity) => {
    const updatedAmenities = [...selectedAmenities];
    if (updatedAmenities.includes(amenity)) {
      updatedAmenities.splice(updatedAmenities.indexOf(amenity), 1);
    } else {
      updatedAmenities.push(amenity);
    }
    setSelectedAmenities(updatedAmenities);
  };
  const handlePreferenceClick = (preference) => {
    const updatedPreferences = [...selectedPreferences];
    if (updatedPreferences.includes(preference)) {
     
      
      updatedPreferences.splice(updatedPreferences.indexOf(preference), 1);
    } else {
      console.log("hello");
      updatedPreferences.push(preference);
    }
    console.log('Updated Preferences:', updatedPreferences);
    setSelectedPreferences(updatedPreferences);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('location', location);
      formData.append('lookingFor', lookingFor);
      formData.append('rent', rent);
      formData.append('occupancy', occupancy);
      photos.forEach((photo) => {
        formData.append('photos', photo);
      });
      formData.append('preferences', JSON.stringify(selectedPreferences));
      formData.append('highlights', JSON.stringify(highlights));
      formData.append('amenities', JSON.stringify(selectedAmenities));
      formData.append('description', description);

      await axios.post("http://localhost:7000/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Room details submitted successfully');
    } catch (error) {
      console.error('Failed to submit room details:', error);
    }
    navigate('/MainPage');
  };

  return (
    <div className="add-room-details">
      <div className="close-icon">
        <XMarkIcon />
      </div>
      <h1>Add Your Room Details</h1>
      <p>So that other users can contact you.</p>
      <form onSubmit={handleSubmit}>
        {/* Location and looking for section */}
        <div className='form-row'>
          <div className="form-group">
            <label htmlFor="location">Add Your Location</label>
            <input type="text" id="location" name="location" placeholder="Add Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="looking-for">Looking For</label>
            <select name="looking-for" id="looking-for" value={lookingFor} onChange={(e) => setLookingFor(e.target.value)}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="any">Any</option>
            </select>
          </div>
        </div>

        {/* Rent and occupancy section */}
        <div className='form-row'>
          <div className="form-group">
            <label htmlFor="rent">Approx Rent</label>
            <input type="number" id="rent" name="rent" placeholder="₹5000" value={rent} onChange={(e) => setRent(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="occupancy">Occupancy</label>
            <select name="occupancy" id="occupancy" value={occupancy} onChange={(e) => setOccupancy(e.target.value)}>
              <option value="single">Single</option>
              <option value="shared">Shared</option>
              <option value="any">Any</option>
            </select>
          </div>
        </div>

        {/* Upload photos section */}
        <div className="form-group">
          <label htmlFor="photos">Upload 3 Photos of your room</label>
          <input type="file" id="photos" name="photos" accept="image/*" multiple onChange={handleFileChange} />
          <p>Click or Drag Images To Upload (JPG, PNG, JPEG)</p>
        </div>

         {/* Choose Preferences section */}
        <div className='preferences'>
          <h2>Preferences</h2>
  <div className='pref-row'>

    <div className={`preference ${selectedPreferences.includes('Earlybird') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('Earlybird')}>
      <div className="rounded-image"><img src={EarlybirdImage} alt="Earlybird"/></div>
      <h3>Earlybird</h3>
    </div>

    <div className={`preference ${selectedPreferences.includes('Fitness Freak') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('Fitness Freak')}>
      <div className="rounded-image"><img src={FitnessFreakImage} alt="FitnessFreak"/></div>
      <h3>FitnessFreak</h3>
    </div>

    <div className={`preference ${selectedPreferences.includes('Music Lover') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('Music Lover')}>
      <div className="rounded-image"><img src={MusicLoverImage} alt="MusicLover"/></div>
      <h3>Music Lover</h3>
    </div>

    <div className={`preference ${selectedPreferences.includes('Studious') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('Studious')}>
      <div className="rounded-image"><img src={StudiousImage} alt="Studious"/></div>
      <h3>Studious</h3>
    </div>

    <div className={`preference ${selectedPreferences.includes('Nightowl') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('ightowl')}>
      <div className="rounded-image"><img src={NightowlImage} alt="Nightowl"/></div>
      <h3>Nightowl</h3>
    </div>
    
    <div className={`preference ${selectedPreferences.includes('Non Alcoholic') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('Non Alcoholic')}>
      <div className="rounded-image"><img src={NonAlcoholicImage} alt="Non Alcoholic"/></div>
      <h3>Non Alcoholic</h3>
    </div>
  </div>
  <div className='pref-row'>
    <div className={`preference ${selectedPreferences.includes('Non Smoker') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('Non Smoker')}>
      <div className="rounded-image"><img src={NonSmokerImage} alt="Non Smoker"/></div>
      <h3>Non Smoker</h3>
    </div>
    <div className={`preference ${selectedPreferences.includes('Party Lover') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('Party Lover')}>
      <div className="rounded-image"><img src={PartyLoverImage} alt="Party Lover"/></div>
      <h3>Party Lover</h3>
    </div>
    <div className={`preference ${selectedPreferences.includes('Pet Lover') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('Pet Lover')}>
      <div className="rounded-image"><img src={PetLoverImage} alt="Pet Lover"/></div>
      <h3>Pet Lover</h3>
    </div>
    <div className={`preference ${selectedPreferences.includes('Sporty') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('Sporty')}>
      <div className="rounded-image"><img src={SportyImage} alt="Sporty"/></div>
      <h3>Sporty</h3>
    </div>
    
    <div className={`preference ${selectedPreferences.includes('Vegan') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('Vegan')}>
      <div className="rounded-image"><img src={VeganImage} alt="Vegan"/></div>
      <h3>Vegan</h3>
    </div>
    <div className={`preference ${selectedPreferences.includes('Wanderer') ? 'selected' : ''}`} onClick={() => handlePreferenceClick('Wanderer')}>
      <div className="rounded-image"><img src={WandererImage} alt="Wanderer"/></div>
      <h3>Wanderer</h3>
    </div>
  </div>
</div>

        {/* Choose highlights section */}
        <div>
          <h2>Choose Highlights for your room</h2>
          <div className='highlightbtn'>
            <div className='highlight-row'>
              <div className={`perk1 ${highlights.includes('Attached Washroom') ? 'selected' : ''}`} onClick={() => handleHighlightClick('Attached Washroom')}>Attached Washroom</div>
              <div className={`perk1 ${highlights.includes('Market nearby') ? 'selected' : ''}`} onClick={() => handleHighlightClick('Market nearby')}>Market nearby</div>
              <div className={`perk1 ${highlights.includes('Attached balcony') ? 'selected' : ''}`} onClick={() => handleHighlightClick('Attached balcony')}>Attached balcony</div>
              <div className={`perk1 ${highlights.includes('Close to metro station') ? 'selected' : ''}`} onClick={() => handleHighlightClick('Close to metro station')}>Close to metro station</div>
              <div className={`perk1 ${highlights.includes('Public transport nearby') ? 'selected' : ''}`} onClick={() => handleHighlightClick('Public transport nearby')}>Public transport nearby</div>
            </div>
            <div className='highlight-row'>
              <div className={`perk1 ${highlights.includes('No restrictions') ? 'selected' : ''}`} onClick={() => handleHighlightClick('No restrictions')}>No restrictions</div>
              <div className={`perk1 ${highlights.includes('Separate washrooms') ? 'selected' : ''}`} onClick={() => handleHighlightClick('Separate washrooms')}>Separate washrooms</div>
              <div className={`perk1 ${highlights.includes('House keeping') ? 'selected' : ''}`} onClick={() => handleHighlightClick('House keeping')}>House keeping</div>
              <div className={`perk1 ${highlights.includes('Gym nearby') ? 'selected' : ''}`} onClick={() => handleHighlightClick('Gym nearby')}>Gym nearby</div>
              <div className={`perk1 ${highlights.includes('Park nearby') ? 'selected' : ''}`} onClick={() => handleHighlightClick('Park nearby')}>Park nearby</div>
            </div>
          </div>
        </div>

        {/* Amenities section */}
        <div className='amenities'>
          <h2>Select Amenities</h2>
          <div className='amen-row'>
            <div className={`amenity ${selectedAmenities.includes('TV') ? 'selected' : ''}`} onClick={() => handleAmenityClick('TV')}>
              <div className="rounded-image"><img src={TvImage} alt="TV"/></div>
              <h3>TV</h3>
            </div>
            <div className={`amenity ${selectedAmenities.includes('Fridge') ? 'selected' : ''}`} onClick={() => handleAmenityClick('Fridge')}>
              <div className="rounded-image"><img src={FridgeImage} alt="Fridge"/></div>
              <h3>Fridge</h3>
            </div>
            <div className={`amenity ${selectedAmenities.includes('Kitchen') ? 'selected' : ''}`} onClick={() => handleAmenityClick('Kitchen')}>
              <div className="rounded-image"><img src={KitchenImage} alt="Kitchen"/></div>
              <h3>Kitchen</h3>
            </div>
            <div className={`amenity ${selectedAmenities.includes('Wifi') ? 'selected' : ''}`} onClick={() => handleAmenityClick('Wifi')}>
              <div className="rounded-image"><img src={WifiImage} alt="Wifi"/></div>
              <h3>Wifi</h3>
            </div>
            <div className={`amenity ${selectedAmenities.includes('Washing Machine') ? 'selected' : ''}`} onClick={() => handleAmenityClick('Washing Machine')}>
              <div className="rounded-image"><img src={MachineImage} alt="Washing Machine"/></div>
              <h3>Washing Machine</h3>
            </div>
          </div>
          <div className='amen-row'>
            <div className={`amenity ${selectedAmenities.includes('AC') ? 'selected' : ''}`} onClick={() => handleAmenityClick('AC')}>
              <div className="rounded-image"><img src={AcImage} alt="AC"/></div>
              <h3>AC</h3>
            </div>
            <div className={`amenity ${selectedAmenities.includes('Power Backup') ? 'selected' : ''}`} onClick={() => handleAmenityClick('Power Backup')}>
              <div className="rounded-image"><img src={PowerImage} alt="Power Backup"/></div>
              <h3>Power Backup</h3>
            </div>
            <div className={`amenity ${selectedAmenities.includes('Cook') ? 'selected' : ''}`} onClick={() => handleAmenityClick('Cook')}>
              <div className="rounded-image"><img src={CookImage} alt="Cook"/></div>
              <h3>Cook</h3>
            </div>
            <div className={`amenity ${selectedAmenities.includes('Parking') ? 'selected' : ''}`} onClick={() => handleAmenityClick('Parking')}>
              <div className="rounded-image"><img src={ParkingImage} alt="Parking"/></div>
              <h3>Parking</h3>
            </div>
          </div>
        </div>
        <h2>Description</h2>
<div className='Description-container'>
  <input
    className='Descrptionarea'
    type="textarea"
    name="description"
    id="description"
    placeholder='I am looking for a roommate for my room.'
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />
</div>

        {/* <h2 >Description</h2>
     <div className='Description-container'>
      </div>
        <input className='Descrptionarea' type="textarea" name="Descrption" id="Descrption" placeholder='Iam looking for a roommate for my room.'/> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddListing;

