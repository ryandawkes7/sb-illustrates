import React, { useEffect, useState } from "react";
import data from "../data.json";

export const Portfolio = () => {
  const [artData, setArtData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setArtData(data);
    if (selected != null) {
      console.log(`new state: ${selected.id}`);
    }
  }, [artData, selected]);

  const showModal = (el) => {
    setSelected(el);
    setShow(true);
  };

  const hideModal = () => {
    setSelected(null);
    setShow(false);
  };

  return (
    <div id="portfolio-container">
      <div className="col-12 d-flex flex-wrap py-5 mx-0">
        <div className="col-12 col-md-3">
          {artData.slice(0, 7).map((item) => {
            return (
              <button
                key={item.id}
                className="w-100 border-0 bg-transparent my-3 art_item"
                onClick={() => showModal(item)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  className="w-100 rounded-lg"
                  style={{ pointerEvents: "none" }}
                  alt={item.title}
                />
              </button>
            );
          })}
        </div>
        <div className="col-12 col-md-3">
          {artData.slice(8, 15).map((item) => {
            return (
              <button
                key={item.id}
                className="w-100 border-0 bg-transparent my-3 art_item"
                onClick={() => showModal(item)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  className="w-100 rounded-lg"
                  style={{ pointerEvents: "none" }}
                  alt="hello"
                />
              </button>
            );
          })}
        </div>
        <div className="col-12 col-md-3">
          {artData.slice(16, 23).map((item) => {
            return (
              <button
                key={item.id}
                className="w-100 border-0 bg-transparent my-3 art_item"
                onClick={() => showModal(item)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  className="w-100 rounded-lg"
                  style={{ pointerEvents: "none" }}
                  alt="hello"
                />
              </button>
            );
          })}
        </div>
        <div className="col-12 col-md-3">
          {artData.slice(24, 32).map((item) => {
            return (
              <button
                key={item.id}
                className="w-100 border-0 bg-transparent my-3 art_item"
                onClick={() => showModal(item)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  className="w-100 rounded-lg"
                  style={{ pointerEvents: "none" }}
                  alt="hello"
                />
              </button>
            );
          })}
        </div>
      </div>

      {selected && <ArtModal item={selected} show={show} hide={hideModal} />}
    </div>
  );
};

const ArtModal = (props) => {
  if (props.show === true) {
    return (
      <div className="modal-bg d-flex justify-content-center align-items-center">
        {/* Button */}
        <button className="modal-close" onClick={props.hide}>
          &#x2715;
        </button>

        {/* Content */}
        <div className="col-11 d-flex justify-content-center">
          {/* Image */}
          <img
            src={`${process.env.PUBLIC_URL}${props.item.image}`}
            alt={props.item.title}
            className="w-auto h-auto"
          />
        </div>
      </div>
    );
  }
};
