import React from "react";
import './footer.css';
import logo from '../header/logo4.png'

function Footer(){
    return(
        
    <footer className="footer">
        <div className="box">
            <img src={logo} alt="" class="logo2"/>
            <span>Copyright &copy; ScalonetaShop</span>
            <img src={logo} alt="" class="logo2"/>
        </div>
        
    </footer>
    )
}


export default Footer;