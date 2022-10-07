import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
function Mapp() {
  const [lng, setLng] = useState(54.37585762735543);
  const [lat, setLat] = useState(24.45677614934833);
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 3.5,
      });
    });
  }, []);
 
  return (
    <div className="App">
        <Link href="/">Home</Link>
      <h1>ur location </h1>
      <Map
        // mapboxAccessToken="pk.eyJ1IjoibWFrYXIxMjM0NSIsImEiOiJjbDgxZWpqbWswZjduM3B0OWJyYzE2YW1qIn0.tJhnUHs7Ng2SjwljSPSAVw"
        mapboxAccessToken="pk.eyJ1IjoibWFrYXIxMjM0NSIsImEiOiJjbDgxZWNxZ2kwMHpwM3dwbGVqM3JzcHl2In0.eEjPwBGZuXT1J_h6yXsnlA"
        style={{
          width: "80vw",
          height: "500px",
          borderRadius: "15px",
         
           padding:"100px", margin:'auto'
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      >
          <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </div>
  );
}


export default Mapp;