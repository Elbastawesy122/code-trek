import React from "react";
import "../Cours/Courses.css"
import Contact from "../contact/Contact";
import { Link } from 'react-router-dom';
import President from "../PRESIDENT/President";


function Courses(){
    return(
        <>
        <h1 className="head text-4xl p-4 bg-[#000268] text-white" id="Courses">Courses</h1>
         <div className="courses py-14 bg-[#000268]">
            <div className="box">
                <h1>Front End</h1>
                <p>"جزء الواجهة الأمامية من التطبيق يتعامل مع واجهة المستخدم والتفاعل مع الأدوات والمستخدمين."</p>
                <Link to={'/details'}><button>التفاصيل</button></Link>
            </div>
            <div className="box">
                <h1>Back End</h1>
                <p>"جزء الواجهة الأمامية من التطبيق يتعامل مع واجهة المستخدم والتفاعل مع الأدوات والمستخدمين."</p>
                <button>التفاصيل</button>
            </div>
            <div className="box">
                <h1>Python</h1>
                <p>"جزء الواجهة الأمامية من التطبيق يتعامل مع واجهة المستخدم والتفاعل مع الأدوات والمستخدمين."</p>
                <button>التفاصيل</button>
            </div>
            <div className="box">
                <h1>Fullter</h1>
                <p>"جزء الواجهة الأمامية من التطبيق يتعامل مع واجهة المستخدم والتفاعل مع الأدوات والمستخدمين."</p>
                <button>التفاصيل</button>
            </div>
            <div className="box">
                <h1>Scratch</h1>
                <p>"جزء الواجهة الأمامية من التطبيق يتعامل مع واجهة المستخدم والتفاعل مع الأدوات والمستخدمين."</p>
                <button>التفاصيل</button>
            </div>
         </div>
         <President/>
        </>
    )
}

export default Courses;