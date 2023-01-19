import React from "react";
import Info from "./Info";
import Sources from "../sources";
const App = () => {
  return (
    <>
      <h2 className="heading">🎥 My movies</h2>
      <div className="box">
        {
          Sources.map((el) => {
            return <Info name={el.name} src={el.src} rating={el.rating} votes={el.votes} />
          })
        }
      </div>
    </>
  );
}

export default App;