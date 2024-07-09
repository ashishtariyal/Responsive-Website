import React from "react";
import web from "../src/images/img9.jpg";
import {Link} from "react-router-dom"
import Common from "./Common";

function About() {
    return (
      <>
  <Common name='Welcome to About Page' 
          imgsrc={web}  
          visit="/contact" 
          btname="Contact Now"/>
      </>
    )
  }
  
  export default About;
  