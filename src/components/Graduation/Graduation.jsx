import React, { useContext } from "react";
import "./Graduation.css";
import { themeContext } from "../../Context";
import { Link } from 'react-scroll'

const Graduation = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // transition
    return (
        <div className="Graduation" id="Graduation">
            {/* left side */}
            <div className="w-left">
                <div className="awesome1">
                    {/* dark Mode */}
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Education
                    </span>
                    <spane>
                        <h3><b><strong>Secondary School Examination / Class-10</strong></b> (passout : 2018) </h3>
                    </spane>
                    <spane>
                        School: Jusco School Kadma
                        <br />
                        Board: Central Board of Secondary Education
                        <br />
                        Percentage/Cgpa : 86.6%
                        <br />

                    </spane>
                    <spane>
                        <h3><b><strong>Higher Secondary Certificate / Class-12</strong></b> (passout : 2020) </h3>
                    </spane>
                    <spane>
                        School: Jusco School Kadma
                        <br />
                        Board: Central Board of Secondary Education
                        <br />
                        Percentage/Cgpa : 78.8%
                        <br />

                    </spane>
                    <spane>
                        <h3><b><strong>Under Graduate</strong></b> (passout : 2024) </h3>
                    </spane>
                    <spane>
                        Institute: Vellore Institute of Technology , Bhopal
                        <br />
                        Branch : Computer Science and Engineering
                        <br />
                        Percentage/Cgpa : 8.07
                        <br />

                    </spane>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Graduation;
