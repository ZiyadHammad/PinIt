import React, {useState} from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import {Room} from "@material-ui/icons"

import 'mapbox-gl/dist/mapbox-gl.css';



function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 3,
   
  });

  const [showPopup, togglePopup] = useState(true)
  return (
    <Map
      {...viewport}
      onMove={next => setViewport(next)}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    >
      <Marker longitude={-112.4} latitude={30.8} color="red">
        <Room style={{ fontSize: viewport.zoom * 10, color: "slateblue"}} />
      </Marker>
      {showPopup && (
      <Popup longitude={-112.4} latitude={30.8}
          anchor="left"
          closeButton={true}
          closeOnClick={false}
        >
          <div className="card">
            <label>Location</label>
            <h4 className="place" >Waffle House</h4>
            <label>Review</label>
            <p>Beautiful Place</p>
            <label>Rating</label>

            <label>Information</label>
        </div>
      </Popup>)}
    </Map>
  );
}

export default App