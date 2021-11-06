import React from "react";
import './welcome-component.css'
import NavigationBar from "../../granular-components/navbar";
import CarouselComponent from "../../granular-components/carousel";

export default function WelcomeComponent(){

    return(
        <div className="welcome-page-container">
            <NavigationBar/>
            <div className="rest-of-the-page">
                <CarouselComponent/>
            </div>
        </div>
    )

}