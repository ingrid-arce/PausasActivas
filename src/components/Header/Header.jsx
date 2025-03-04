import React from "react";
import { useNavigate} from "react-router-dom";
import "./HeaderStyle.css"; 


const Header1 = () => {

    const navigate = useNavigate();
    return (
        <header className="Header">
            <h1  className="title2"
            onClick={()=> navigate("/")}> GreenSQA</h1>
        </header>
    );
};

export default Header1;