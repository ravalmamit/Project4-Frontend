import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import "./Rating.css";

function Rating({ id, action }) {
  console.log(id);
  const [rating, setRating] = useState(0);
  const [userinfo, setUserinfo] = useState([]);
  //   console.log(rating);
  function getDetails() {
    // console.log(rating);
    axios
      .get(process.env.REACT_APP_BACKEND_URL + `/users/register`)
      .then((response) => {
        setUserinfo(response.data);
      });
    console.log(userinfo);
  }
  useEffect(() => {
    getDetails();
  }, []);

  function agentRatings(rating) {
    console.log(rating);
    console.log(id);
    axios({
      method: "PUT",
      data: {
        rating: rating,
      },
      //   withCredentials: true,
      url: process.env.REACT_APP_BACKEND_URL + `/users/register/update/${id}`,
    }).then(() => {
      console.log(rating);
      getDetails();
    });
  }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                agentRatings(ratingValue);
                action(ratingValue);
              }}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Rating;
