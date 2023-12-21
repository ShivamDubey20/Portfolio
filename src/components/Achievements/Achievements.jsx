import React from "react";
import "./Achievements.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import download1 from "../../img/download1.png";
import download2 from "../../img/download 2.png";
import hackathon from "../../img/hackathon.jpeg";
import sports from "../../img/sports.png";

const Achievements = () => {
    const clients = [
        {
            img: download2,
            review:
                "Hacking Hiest’21 – Winner | 2nd under general category | Parameters: Originality and Technical Difficulty.",
        },
        {
            img: hackathon,
            review:
                "Participated in lot of Hackathons and had a good experience.",
        },
        {
            img: download1,
            review:
                "Regional Level Table tennis Player",
        },
        {
            img: sports,
            review:
                "Won a number of prizes at interschool level in number of Sports.",
        },
    ];

    return (
        <div id="achievements">
            <div className="t-wrapper" id="testimonial">
                <div className="t-heading">
                    <span>My </span>
                    <span>Achievements </span>
                    <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                    <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {clients.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial">
                                    <img src={client.img} alt="" />
                                    <span>{client.review}</span>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Achievements;
