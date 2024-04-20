import React from "react";
import "./Contact.css"

function Contact(){
    return(
        <>
        <h1 className="head text-4xl p-4 bg-[#000268] text-white">Contact</h1>
        <div className=" contact bg-[#000268] py-14 flex flex-col items-center ">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address"/>
            <input type="text" placeholder="Mobile Number"/>
            <textarea  placeholder="Your message" cols="30" rows="10"></textarea>
            <button>Send Message</button>
        </div>
        <h1 className="copyright text-white p-2">Copyright © 2024 - Code-TRek</h1>
        </>
    )
}

export default Contact;