import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.Wlh22j5XcQk01mmfY0WJ9QHaHa&pid=Api&P=0&h=220"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              My Name is Pradeep Sharma . I am a full stack web developer. I am completing My BCA from Graphic Era Hill University with 9.01/10 cgpa. Currently I am persuing Master of computer application(MCA).I am seeking a role in the IT industry where I can utilize my technical, analytical, and logical skills to deliver successful projects

              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
