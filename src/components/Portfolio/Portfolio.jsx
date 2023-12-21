import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Summize from "../../img/Summize.png";
import Promptopia from "../../img/Promptopia.png";
import SynchroMatch from "../../img/SynchroMatch.png";
import MyKicks from "../../img/MyKicks.png";
import quill from "../../img/quill.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src={Summize} alt="" />
            <a
              href="https://github.com/ShivamDubey20/Summize"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="button s1-button">Summize</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={SynchroMatch} alt="" />
            <a
              href="https://github.com/ShivamDubey20/SynchroMatch"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="button s1-button">Summize</button>
            </a>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={Promptopia} alt="" />
            <a
              href="https://github.com/ShivamDubey20/Promptopia"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="button s1-button">Promptopia</button>
            </a>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={MyKicks} alt="" />
            <a
              href="https://github.com/ShivamDubey20/My_kicks.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="button s1-button">MyKicks</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={quill} alt="" />
            <a
              href="https://github.com/ShivamDubey20/Quill.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="button s1-button">Quill</button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
