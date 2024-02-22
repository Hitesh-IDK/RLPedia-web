import science from "../icons/science.gif";
import code from "../icons/coding.gif";
import data from "../icons/Data analysis .gif";
import logic from "../icons/Logic.gif";
const src="/site_media/version-V87e099514e8/images/homepage/landingpage-course-topics.mp4"
export default function () {
  return (
    <>
      <div className="row Banner-container">
        <div className="col-6 left-side">
          <h1 className="Banner-text">
            Become a great
            <span className="head-text"> problem solver</span>
          </h1>
          <p className="pt-5 left-text ">
            Build powerful critical thinking skills with interactive lessons in{" "}
            <b>math, data analysis, programming,</b> and <b>AI.</b>
          </p>
          <button className="getBtn btn mt-5">Get Started</button>
        </div>
        <div className="col-6 left-side">
        
        </div>
      </div>
      <div className="row icon-container">
        <h2>Our Courses</h2>
        <div className="col-3 icon-box">
          <img src={data} alt="" className="" />
          <h5 className="mt-md-3 text">Data Analysis</h5>
        </div>
        <div className="col-3 icon-box">
          <img src={logic} alt="" className="" />
          <h5 className="mt-md-3 text">Logical Thinking</h5>
        </div>
        <div className="col-3 icon-box">
          <img src={code} alt="" className="" />
          <h5 className="mt-md-3 text">Data Analysis</h5>
        </div>
        <div className="col-3 icon-box">
          <img src={science} alt="" className="" />
          <h5 className="mt-md-3 text">Data Analysis</h5>
        </div>
      </div>
    </>
  );
}
