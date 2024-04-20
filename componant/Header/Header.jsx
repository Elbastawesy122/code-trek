import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';


function Header(){
    return(
        <>
        <div className="header flex justify-between items-center p-5 text-white">
        <Link to={'/'}>
            <h1 className=" line-through text-2xl">#CodeTRek</h1>
        </Link>
            <div className="lan flex justify-around">
                <p className="ar">العربيه</p>
                <p>English</p>
            </div>
        </div>
        </>
    )
}

export default Header;