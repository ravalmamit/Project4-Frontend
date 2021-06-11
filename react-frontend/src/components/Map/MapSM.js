import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as grocery from "./data/grocery.json";
import groceryImage from "./grocery.svg";
import HomeIcon from "@material-ui/icons/Home";
import { red } from "@material-ui/core/colors";
import "./MapT.css";
import Header from "../Header/Header";

function MapSM(props) {
  let bounds = [[-71.10975, 42.3736]];

  const [viewport, setViewport] = useState({
    latitude: 42.3736,
    longitude: -71.1097,
    width: "100vw",
    height: "70vw",
    center: [-71.1097, 42.3736],
    zoom: 10,
    maxBounds: bounds,
  });

  const [selectedGrocery, setSelectedGrocery] = useState(null);

  return (
    <div>
      <Header />
      <div className="body">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/amitmraval/ckplhnvqr0m1p17o0l1v8nshk"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          {/* HOUSE */}

          {
            <Marker latitude={42.3898} longitude={-71.12898}>
              <button>
                <HomeIcon style={{ color: red[500] }} />
              </button>
            </Marker>
          }

          {/* HOUSE */}

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
    </div>
  );
}

export default MapSM;
