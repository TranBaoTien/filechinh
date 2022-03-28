import React from "react";
import '../App.css';

import logo from './images/sach1.jpg';
import sach2 from './images/sach2.jpg';
import sach3 from './images/sach3.jpg';
function Headers(){
    return(
        <>
        <div className="headers">
        <img src={sach2} alt=""/>
        </div>
        <div className="mainhead">
        <div className="mainheadright"><img src={logo} alt=""/></div>
        <div  className="mainheadleft"><img src={sach3} alt=""/></div>
        </div>
        </>
      
    );
}
export default Headers;

