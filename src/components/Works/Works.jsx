import React, { useContext } from "react";
import "./Works.css";
import tailwind from "../../img/tailwind.png";
import vscode from "../../img/vscode.png";
import figma from "../../img/figma.png";
import download from "../../img/download.png";
import n from "../../img/n.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Internship
          </span>
          <span>Experience</span>
          <spane>
            <h3><b><strong>Oyee Busy Technologies pvt.ltd</strong></b> (Mar 2023 - Jun 2023)</h3>
            <br/>
            <br/>
              1. Developed a Responsive and Interactive page for company using ReactJs and NextJs.
            <br />
              2. Implemented the required light weight data validation, manipulation, sorting work as required
            <br />
              3. Learning about API’s and integrating them to my websites.
            <br />
            
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Connect</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={vscode} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={tailwind} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={download} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={figma} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={n} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
