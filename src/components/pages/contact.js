import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import profilePicture from "../../../static/assets/images/contact/login.jpg"

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column" 
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone"/>
                        </div>

                        <div className="text">801-369-0605</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope"/>
                        </div>

                        <div className="text">nathan.storrs@gmail.com</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt"/>
                        </div>

                        <div className="text">Spanish Fork, Utah 84660</div>
                    </div>
                </div>
            </div>
        </div>
    )
}