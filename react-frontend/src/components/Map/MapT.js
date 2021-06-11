import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as transport from "./data/transportation.json";
import subway from "./subway.svg";
import HomeIcon from "@material-ui/icons/Home";
import { red } from "@material-ui/core/colors";
import "./MapT.css";
import Header from "../Header/Header";

function MapT(props) {
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

  const [selectedTransport, setSelectedTransport] = useState(null);

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
        </ReactMapGL>
      </div>
    </div>
  );
}

export default MapT;
