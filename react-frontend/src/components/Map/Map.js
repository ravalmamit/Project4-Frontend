import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as transport from "./data/transportation.json";
import * as school from "./data/school.json";
import * as restaurant from "./data/restaurants.json";
import * as grocery from "./data/grocery.json";
import subway from "./subway.svg";
import schoolImage from "./school.svg";
import nightlife from "./nightlife.svg";
import groceryImage from "./grocery.svg";

import "./Map.css";

function Map(props) {
  let bounds = [[-71.10975, 42.3736]];

  const [viewport, setViewport] = useState({
    latitude: 42.3736,
    longitude: -71.1097,
    width: "200vw",
    height: "40vw",
    center: [-71.1097, 42.3736],
    zoom: 16,
    maxBounds: bounds,
  });

  const [selectedTransport, setSelectedTransport] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedGrocery, setSelectedGrocery] = useState(null);

  return (
    <div className="body">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/amitmraval/ckplhnvqr0m1p17o0l1v8nshk"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {/* /////////// Transportation  ////////         */}
        {transport.features.map((station) => (
          <Marker
            key={station.properties.STATION}
            latitude={station.geometry.coordinates[1]}
            longitude={station.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedTransport(station);
              }}
            >
              <img src={subway} alt="subway" />
            </button>
          </Marker>
        ))}

        {selectedTransport ? (
          <Popup
            latitude={selectedTransport.geometry.coordinates[1]}
            longitude={selectedTransport.geometry.coordinates[0]}
            onClose={() => {
              setSelectedTransport(null);
            }}
          >
            <div>
              <h2>{selectedTransport.properties.STATION}</h2>
              <p>{selectedTransport.properties.LINE}</p>
            </div>
          </Popup>
        ) : null}
        {/* /////////// Transportation  ////////         */}

        {/* /////////// Schools  ////////         */}

        {school.features.map((school) => (
          <Marker
            key={school.properties.SITE_NAME}
            latitude={school.geometry.coordinates[1]}
            longitude={school.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedSchool(school);
              }}
            >
              <img src={schoolImage} alt="school" />
            </button>
          </Marker>
        ))}

        {selectedSchool ? (
          <Popup
            latitude={selectedSchool.geometry.coordinates[1]}
            longitude={selectedSchool.geometry.coordinates[0]}
            onClose={() => {
              setSelectedSchool(null);
            }}
          >
            <div>
              <h2>{selectedSchool.properties.SITE_NAME}</h2>
              <p>{selectedSchool.properties.ADDRESS}</p>
              <p>{selectedSchool.properties.PHONE}</p>
            </div>
          </Popup>
        ) : null}
        {/* /////////// Schools  ////////         */}

        {/* /////////// Restaurants  ////////         */}

        {restaurant.results.map((rest) => (
          <Marker
            key={rest.name}
            latitude={rest.geometry.location.lat}
            longitude={rest.geometry.location.lng}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedRestaurant(rest);
              }}
            >
              <img src={nightlife} alt="rest" />
            </button>
          </Marker>
        ))}

        {selectedRestaurant ? (
          <Popup
            latitude={selectedRestaurant.geometry.location.lat}
            longitude={selectedRestaurant.geometry.location.lng}
            onClose={() => {
              setSelectedRestaurant(null);
            }}
          >
            <div>
              <h2>{selectedRestaurant.name}</h2>
            </div>
          </Popup>
        ) : null}
        {/* /////////// Restaurants  ////////         */}

        {/* /////////// Grocery  ////////         */}

        {grocery.results.map((grocery) => (
          <Marker
            key={grocery.name}
            latitude={grocery.geometry.location.lat}
            longitude={grocery.geometry.location.lng}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedGrocery(grocery);
              }}
            >
              <img src={groceryImage} alt="grocery" />
            </button>
          </Marker>
        ))}

        {selectedGrocery ? (
          <Popup
            latitude={selectedGrocery.geometry.location.lat}
            longitude={selectedGrocery.geometry.location.lng}
            onClose={() => {
              setSelectedGrocery(null);
            }}
          >
            <div>
              <h2>{selectedGrocery.name}</h2>
              <p>{selectedGrocery.vicinity}</p>
            </div>
          </Popup>
        ) : null}
        {/* /////////// Grocery  ////////         */}
      </ReactMapGL>
    </div>
  );
}

export default Map;
