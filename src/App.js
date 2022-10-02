import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [image, setImage] = useState("");
  const [explanation, setExplanation] = useState("");

  async function onClickListener() {
    let response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=bJqJCfjviictVxF6eyL1MGwBpSYKSJo4mXPZtkeK`
    );
    let data = await response.json();
    console.log(data);
    setImage(data.hdurl);
    setExplanation(data.explanation);
  }

  console.log(image);
  return (
    <div className="container">
      <h1>ArtFinder Prototype</h1>
      <div className="form">
        <input type="text" />
        <button onClick={onClickListener}>Find</button>
      </div>
      {image && explanation ? (
        <Fragment>
          <img
            src={image}
            width="1800px"
            height="1000px"
            alt="No Image Found :("
          />
          <p>{explanation}</p>
        </Fragment>
      ) : null}
    </div>
  );
}

export default App;
