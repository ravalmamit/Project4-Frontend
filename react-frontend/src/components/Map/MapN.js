import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as restaurant from "./data/restaurants.json";
import nightlife from "./nightlife.svg";
import HomeIcon from "@material-ui/icons/Home";
import { red } from "@material-ui/core/colors";
import "./MapT.css";
import Header from "../Header/Header";

function MapN(props) {
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

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

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
        </ReactMapGL>
      </div>
    </div>
  );
}

export default MapN;
