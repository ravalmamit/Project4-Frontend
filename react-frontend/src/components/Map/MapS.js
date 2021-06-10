import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as school from "./data/school.json";
import schoolImage from "./school.svg";
import "./MapT.css";
import Header from "../Header/Header";

function MapS(props) {
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

  const [selectedSchool, setSelectedSchool] = useState(null);
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
        </ReactMapGL>
      </div>
    </div>
  );
}

export default MapS;
