import React from "react";
import Navbar from "./components/Navbar"
import Destination from "./components/Destination"
import data from "./data"

function App() {
  const destinationsData = data.map(item => {
    return (
      <Destination key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className='container'>
      <Navbar />
      {destinationsData}
    </div>
  );
}

export default App;
