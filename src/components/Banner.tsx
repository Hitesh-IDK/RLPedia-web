import science from "../public/icons/science.gif";
import code from "../public/icons/coding.gif";
import data from "../public/icons/Data analysis.gif";
import logic from "../public/icons/Logic.gif";
import { Link } from "react-router-dom";
import Navabar from "./navabar";
import { inherits } from "util";
export default function () {
  return (
    <>
      {/* <Navabar /> */}

      <div className="row">
        <div className="col-6 left-side">
          <h1 className="Banner-text">
            Become a great
            <span className="head-text"> problem solver</span>
          </h1>
          <p className="pt-5 left-text ">
            Build powerful critical thinking skills with interactive lessons in{" "}
            <b>math, data analysis, programming,</b> and <b>AI.</b>
          </p>
          <Link className="getBtn btn mt-5" to={"/start"}>
            Get Started
          </Link>
        </div>
        <div className="col-6 right-side"></div>
      </div>
      <div className="row icon-container">
        <div className="col-3 icon-box">
          <Link
            to={"/computerscience"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={code} alt="" className="" />
            <h5 className="mt-md-3 text">Computer Science</h5>
          </Link>
        </div>
        <div className="col-3 icon-box">
          <Link
            to={"/logical"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={logic} alt="" className="" />
            <h5 className="mt-md-3 text">Logical Thinking</h5>
          </Link>
        </div>
        <div className="col-3 icon-box">
          <Link
            to={"/analysis"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={data} alt="" className="" />
            <h5 className="mt-md-3 text">Data Analysis</h5>
          </Link>
        </div>
        <div className="col-3 icon-box">
          <Link
            to={"/scientific"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={science} alt="" className="" />
            <h5 className="mt-md-3 text">Scientific Thinking</h5>
          </Link>
        </div>
      </div>
    </>
  );
}
