import React from "react";
import Data1 from "./components/Data1.jsx";
import { MyContext } from "./context";
let data = 100;
export const App = () => {
  return (
    <div>
      <h1>{data}</h1>
      <MyContext.Provider value={data}>
        <Data1 />
      </MyContext.Provider>
    </div>
  );
};
export default App;
