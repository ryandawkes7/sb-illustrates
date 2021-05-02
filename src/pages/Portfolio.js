import React, { useEffect, useState } from "react";
import { ArtCard } from "../components/portfolio/ArtCard";
import data from "../data.json";

export const Portfolio = () => {
  const [artData, setArtData] = useState([]);
  useEffect(() => {
    setArtData(data);
  }, [artData]);

  return (
    <div id="portfolio-container">
      <div className="col-12 d-flex flex-wrap py-5 mx-0">
        {artData.map((e) => {
          return <ArtCard item={e} key={e.id} />;
        })}
      </div>
    </div>
  );
};
