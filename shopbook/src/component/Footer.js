import React from "react";
import '../App.css';
function Footer(){

    return(
        <footer>
        <div className="splitter"></div>
        <ul>
            
        </ul>
 
        <div className="bar">
            <div className="bar-wrap">
                <ul className="links"> 
                    <li><a href="#">Home</a></li>
                    <li><a href="#">License</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Advertise</a></li>
                    <li><a href="#">About</a></li>
                </ul>
 
                <div className="social">
                  
                </div>
                <div className="clear"></div>
                <div className="copyright">       &copy;  2022 All Rights Reserved</div>
            </div>
        </div>
    </footer>
    );
}
export default Footer;