import React from "react";
import "../Home/Home.css";
import { FaChevronDown } from "react-icons/fa";
import About from "../About/About";

function Home(){
    return(
        <>
        <div className="home  bg-[#181950] text-white">
            <div className="text flex flex-col items-center">
                <h1 className=" text-[#fac358] text-5xl m-6">Code-TRek</h1>
                <p className=" text-xl m-6">ارفع مهاراتك التقنية من خلال المشاريع العملية ورؤى الخبراء للحصول على مهنة مزدهرة في مجال التكنولوجيا!</p>
                <div className="but flex items-center w-fit m-auto"> 
                <a href="#Courses" className="flex items-center uppercase text-xl">courses
                <FaChevronDown className="ml-2"/>
                </a>
                </div>
            </div>
        </div>
        <About/>
        </>
    )
}
export default Home;