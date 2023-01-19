import React from "react";

const Info = (props) => {
  return (
  <div className="card">
    <div className="top">
      <h3>{props.name} 📝</h3>
      <img src={props.src} alt="img" />
    </div>
    <div className="bottom">
      <p>Rating : {props.rating} ⭐</p>
      <p>Votes : {props.votes} 👀</p>
    </div>
  </div>
  )
}

export default Info;