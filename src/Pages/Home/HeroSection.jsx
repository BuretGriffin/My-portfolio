import React from "react";


export default function Herosection(){
    return(
    <section id="herosection" className="herosection">
        <div className="herosection--content--box">
            <div className="herosection--content">
                <p className="section--title"> Hi IM Buret</p>
                <h1 className="Herosection-- title">
                    <span className="Herosection-- title-color">FULL STACK</span>
                    <br/>
                    Developer
                </h1>
                <p className="herosection--description">
                    hi im griffin and im a full stack Developer
                    <br/>welcome to my page   
                </p>
            </div>
                <button className="description-- button">Get in touch</button>

        </div>
        <div className="herosection--image">
        <img src="./img/herosectin.jpg" alt="Hero Section" />

        </div>

    </section>
    );
}