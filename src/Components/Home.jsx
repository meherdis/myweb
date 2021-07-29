import React from 'react'
import Common from './Common';
import home from "../Images/home.svg"
const Home = () => {
    return (
        <div>
           <Common name="Grow Your Business" visit="/about" imgsrc={home} btname="Get Started"/>
        </div>
    )
}

export default Home
