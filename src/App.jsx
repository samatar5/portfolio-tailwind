import { useState } from "react";

import Banner from "./komponents/Banner";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black">
      <Banner />
    </div>
  );
}
export default App;
