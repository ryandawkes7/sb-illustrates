import React from "react";
import { catSlider } from "../globals/catSlider";

export const Portfolio = () => {
  const uni = document.getElementById("university");
  const per = document.getElementById("personal");
  const com = document.getElementById("commission");

  if (per) console.log(per.children);

  if (uni && per && com) {
    catSlider(uni, per, com);
    catSlider(per, uni, com);
    catSlider(com, per, uni);
  }

  return (
    <div
      id="portfolio-home"
      className="section_container w-100 d-flex align-items-center"
      name="section"
    >
      <div className="d-flex w-100 px-100 portfolio_container">
        {/* Description */}
        <div className="col-12 col-md-4 d-flex justify-content-center flex-column description_container">
          <h1 className="p-2">Portfolio</h1>
          <p className="p-2">
            Over the years, I have completed various forms of work. Select a
            category on the right to see some of them.
          </p>
        </div>

        {/* Gallery (Desktop) */}
        <div className="col-8 d-none d-md-flex image_container pl-100">
          <div className="col-4 p-0 image_slider">
            <div className="image_box position-relative" id="university">
              <div className="position-absolute">University</div>
            </div>
          </div>
          <div className="col-4 p-0 image_slider">
            <div className="image_box position-relative" id="personal">
              <div className="position-absolute">Personal</div>
            </div>
          </div>
          <div className="col-4 p-0 image_slider">
            <div className="image_box position-relative" id="commission">
              <div className="position-absolute">Commissions</div>
            </div>
          </div>
        </div>

        {/* Gallery (Mobile) */}
        <div className="col-12 d-flex d-md-none flex-column image_container w-100">
          <div className="w-100 h-33">
            <div className="image_box position-relative h-100" id="university">
              <div className="position-absolute">University</div>
            </div>
          </div>
          <div className="w-100 h-33">
            <div className="image_box position-relative h-100" id="personal">
              <div className="position-absolute">Personal</div>
            </div>
          </div>
          <div className="w-100 h-33">
            <div className="image_box position-relative h-100" id="commission">
              <div className="position-absolute">Commissions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
