import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>First React App Installation</h1>
      <div>
        <p>
          <h3>What is React?</h3>
        </p>
      </div>
      <p>
        React (also known as React.js or ReactJS) is a free and open-source
        front-end JavaScript library for building user interfaces based on
        components by Facebook Inc. It is maintained by Meta (formerly Facebook)
        and a community of individual developers and companies React lets you
        build user interfaces out of individual pieces called components. Create
        your own React components like Thumbnail, LikeButton, and Video. Then
        combine them into entire screens, pages, and apps..
      </p>
      <ul>1.John Nicole Lawas</ul>
      <ul>2.Mark Japhzel Mojado</ul>
    </div>
  );
}

export default App;
