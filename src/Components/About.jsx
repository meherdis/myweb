import React from 'react'
import about from "../Images/about.svg"
import Common from "./Common"
const About = () => {
    return (
        <div>
            <Common name="Welcome to About Page" visit="/contact" imgsrc={about} btname="Contact us"/>
        </div>
    )
}

export default About
