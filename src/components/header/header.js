

import React from "react";

import './header.css'

const Header = () =>{
    return(
       <section className="bg-white p-3 header">
         <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="logo">
                        <h1>Web App Clouds</h1>
                    </div>
                </div>
            </div>
         </div>
       </section>
    )
}


export default Header;