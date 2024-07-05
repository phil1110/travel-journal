import React from "react";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import data from "./data";

function App() {
  const articles = data.map((item) => {
    return (
      <Article
        title={item.title}
        location={item.location}
        mapsLink={item.mapsLink}
        startDate={item.startDate}
        endDate={item.endDate}
        desc={item.desc}
        image={item.image}
      />
    );
  });

  return (
    <div className="app-cont">
      <Navbar />

      <section className="articles">{articles}</section>
    </div>
  );
}

export default App;
