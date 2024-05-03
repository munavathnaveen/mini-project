import React from 'react';
import './AddListing.css';
import TvImage from './assets/Amenities/Tv.jpg';
import FridgeImage from './assets/Amenities/Fridge.jpg';
import KitchenImage from './assets/Amenities/Kitchen.jpg';
import WifiImage from './assets/Amenities/Wifi.jpg';
import MachineImage from './assets/Amenities/washing machine.jpg';
import AcImage from './assets/Amenities/Air Conditioner.jpg';
import PowerImage from './assets/Amenities/PowerBackup.jpg';
import CookImage from './assets/Amenities/Cook.jpg';
import ParkingImage from './assets/Amenities/Parking.jpg';

const AddListing = () => {
  return (
    <div className="add-room-details">
      <h1>Add Your Room Details</h1>
      <p>So that other users can contact you.</p>
      <form>
        {/* Location and looking for section */}
        <div className='form-row'>
          <div className="form-group">
            <label htmlFor="location">Add Your Location</label>
            <input type="text" id="location" name="location" placeholder="Add Location" />
          </div>
          <div className="form-group">
            <label htmlFor="looking-for">Looking For</label>
            <select name="looking-for" id="looking-for">
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
            <input type="number" id="rent" name="rent" placeholder="₹5000" />
          </div>
          <div className="form-group">
            <label htmlFor="occupancy">Occupancy</label>
            <select name="occupancy" id="occupancy">
              <option value="single">Single</option>
              <option value="shared">Shared</option>
              <option value="any">Any</option>
            </select>
          </div>
        </div>

        {/* Upload photos section */}
        <div className="form-group">
          <label htmlFor="photos">Upload 3 Photos of your room</label>
          <input type="file" id="photos" name="photos" multiple />
          <p>Click or Drag Images To Upload (JPG, PNG, JPEG)</p>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Choose highlights section */}
      <div>
        <h2>Choose Highlights for your room</h2>
        <div className='highlightbtn'>
          <div className='highlight-row'>
            {/* Highlights */}
            <div className='perk1'>Attached Washroom</div>
            <div className='perk1'>Market nearby</div>
            <div className='perk1'>Attached balcony</div>
            <div className='perk1'>Close to metro station</div>
            <div className='perk1'>Public transport nearby</div>
          </div>
          <div className='highlight-row' >
            <div className='perk1'>No restrictions</div>
            <div className='perk1'>Separate washrooms</div>
            <div className='perk1'>House keeping</div>
            <div className='perk1'>Gym nearby</div>
            <div className='perk1'>Park nearby</div>
          </div>
        </div>
      </div>

      {/* Amenities section */}
      <div className='amenities'>
        <div className='amen-row'>
          <div className='amenity'><div className="rounded-image"><img src={TvImage} alt="TV"/></div><h3>TV</h3></div>
          <div className='amenity'><div className="rounded-image"><img src={FridgeImage} alt="Fridge"/></div><h3>Fridge</h3></div>
          <div className='amenity'><div className="rounded-image"><img src={KitchenImage} alt="Kitchen"/></div><h3>Kitchen</h3></div>
          <div className='amenity'><div className="rounded-image"><img src={WifiImage} alt="Wifi"/></div><h3>Wifi</h3></div>
          <div className='amenity'><div className="rounded-image"><img src={MachineImage} alt="Washing Machine"/></div><h3>Washing Machine</h3></div>
        </div>
        <div className='amen-row'>
          <div className='amenity'><div className="rounded-image"><img src={AcImage} alt="AC"/></div><h3>AC</h3></div>
          <div className='amenity'><div className="rounded-image"><img src={PowerImage} alt="Power Backup"/></div><h3>Power Backup</h3></div>
          <div className='amenity'><div className="rounded-image"><img src={CookImage} alt="Cook"/></div><h3>Cook</h3></div>
          <div className='amenity'><div className="rounded-image"><img src={ParkingImage} alt="Parking"/></div><h3>Parking</h3></div>
        </div>
      </div>
      <h2>Description</h2>
      <div className='Description-container'>
      </div>
        {/* <button className='btn' type="submit">Submit</button> */}
        <div className='submitbtn'>
          Submit
        </div>
    </div>
  );
};

export default AddListing;
