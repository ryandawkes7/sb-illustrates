import React from 'react';

export const About = () => {
  return (
    <div id="about" className="section_container w-100 d-flex align-items-center" name="section">
      <div className="d-flex justify-content-center align-items-center w-100 px-100 about_container">

        {/* Profile image */}
        <div className="col-12 col-md-6 mr-auto p-3 d-flex align-items-center justify-content-center">
            <img className="profile_image w-75 d-none d-md-block mr-auto" src={`${process.env.PUBLIC_URL}/assets/profile-image.png`} alt="Self Portrait" />
            <img className="profile_image w-100 d-block d-md-none mr-auto" src={`${process.env.PUBLIC_URL}/assets/profile-image.png`} alt="Self Portrait" />
        </div>

        {/* Description */}
        <div className="col-12 col-md-6 pr-100 d-flex justify-content-center flex-column description_container">
            <h1 className="p-2">About Me</h1>
            <p className="p-2">
                Ny name is Sarah Brennan. I am a third-year Illustration (BA Hons) student
                with a large ambition for Digital and Physical artwork. I thrive in 
                portrait-based artwork, specifically from a shoulder-up perspective, 
                but I do not shy away from alternative mediums.
            </p>
        </div>

      </div>
    </div>
  )
}