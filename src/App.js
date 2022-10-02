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
    <Fragment>
      <h1>ArtFinder Prototype</h1>
      <button onClick={onClickListener}>Click Me!</button>
      {image && explanation ? (
        <Fragment>
          <img
            src={image}
            alt="No Image Found :("
            width="1920px"
            height="1080px"
          />
          <p>{explanation}</p>
        </Fragment>
      ) : null}
    </Fragment>
  );
}

export default App;
