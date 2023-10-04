import React from "react";
import HiDocDrWhite from "../image/hidoc-logo-white.png";
import { FiFolder } from "react-icons/fi";
import { MdVideoCameraFront } from "react-icons/md";
import { AiFillFileText } from "react-icons/ai";
import { AiOutlineCalculator } from "react-icons/ai";
import { MdContentPaste } from "react-icons/md";
import { AiOutlineCopyright } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { CiTrophy } from "react-icons/ci";
import './Footer.css';



const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content" >
                <div className="footer-info">
                    <div className="footer-hidocdr" >
                        <img src={HiDocDrWhite} alt="HidocDr" style={{ width: "60%" }} />
                    </div>
                    <p className="footer-information" >Fastest Growing Medical Platform for Doctors.</p>

                    <div className="footer-icons">
                        <div>
                            <a href="https://www.facebook.com/login/"><BiLogoFacebook className="facebook-icons cursor-pointer" /></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/"><AiOutlineInstagram className="instagram-icons cursor-pointer" /></a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/"><AiFillYoutube className="youtube-icons cursor-pointer" /></a>
                        </div>
                        <div>
                            <a href="https://in.linkedin.com/"><CiLinkedin className="linkedin-icons cursor-pointer" /></a>
                        </div>
                    </div>
                </div>
                <div className="hidocdr-details">
                    <p className="hidocdr-header">REACH US</p>
                    <p className="hidocdr-header-info">Please contact the below details for any other information</p>
                    <label className="hidocdr-label" >Email:</label>
                    <p className="hidocdr-fulldetails">info@hidoc.co</p>
                    <label className="hidocdr-label" >Address:</label>
                    <p className="hidocdr-fulldetails">Hidoc Dr. Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE, 19808, United States.</p>
                </div>
                <div className="hidoc-features-div">
                    <p className="hidoc-features">HIDOC DR. FEATURES</p>
                    <div className="hidoc-features-icons">
                        <div className="hidoc-drugdatabase cursor-pointer">
                            <div className="fiFolder "><a href="https://www.drdb.eu/info.asp"><FiFolder className="icons-FiFolder" /></a></div>
                            <p className="hidoc-features-name">Drug Database</p>
                        </div>
                        <div className="hidoc-webinars cursor-pointer">
                            <div className="folder-MdVideoCameraFront "><a href="https://www.ancestry.com/name-origin?surname=wibner"> <MdVideoCameraFront className="icons-MdVideoCameraFront " /></a></div>

                            <p className="hidoc-features-name">Webinars</p>
                        </div>
                        <div className="hidoc-druginteracton cursor-pointer">
                            <div className="folder-aiFillFileText"><a href="https://www.webmd.com/interaction-checker/default.htm"><AiFillFileText className="icons-AiFillFileText" /></a></div>

                            <p className="hidoc-features-name">Drug Interaction</p>
                        </div>
                        <div className="hidoc-medical-calculator cursor-pointer">
                            <div className="folder-aiOutlineCalculator">
                                <a href="https://reference.medscape.com/guide/medical-calculators">  <AiOutlineCalculator className="icons-AiOutlineCalculator" />
                                </a></div>

                            <p className="hidoc-features-name">Medical Calculator</p>
                        </div>
                    </div>
                    <div className="hidoc-features-icons cursor-pointer">
                        <div className="hidoc-articles">
                            <div className="folder-aiFillFileTextTwo"> <a href="https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2023.html"> <AiFillFileText className="icons-AiFillFileText" /></a></div>

                            <p className="hidoc-features-name">Articles</p>
                        </div>
                        <div className="hidoc-quizzes cursor-pointer">
                            <div className="folder-quizzes">
                                <a href="https://www.medindia.net/medical-quiz/quiz-on-drug-abuse.asp"><CiTrophy className="icons-citrophy" /></a></div>
                            <p className="hidoc-features-name">Quizzes</p>
                        </div>
                        <div className="hidoc-diseases-database cursor-pointer">
                            <div className="folder-aiFillFileTextThree"><a href="http://www.diseasesdatabase.com/"> <AiFillFileText className="icons-AiFillFileText" /></a></div>

                            <p className="hidoc-features-name">Diseases Database</p>
                        </div>
                        <div className="hidoc-surveys cursor-pointer">
                            <div className="folder-mdContentPaste">
                                <a href="https://www.niddk.nih.gov/health-information/health-statistics/diabetes-statistics/national-diabetes-survey"> <MdContentPaste className="icons-MdContentPaste" /></a></div>
                            <p className="hidoc-features-name">Surveys</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidocdr-footer">
                <p className="hidocdr-copyright">
                    <span className="copyright-icon" ><AiOutlineCopyright className="icon-aiOutlineCopyright" /></span>
                    <span className="copyright-text" >Copyright 2022 </span>
                    <span className="hidoc-fontweight"> Hidoc Dr.Inc.</span>
                </p>
                <p className="hidocdr-terms-conditions">Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    )
}
export default Footer;