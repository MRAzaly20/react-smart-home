import React, { useState, useEffect } from "react";
import "./nav.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

/*interface Props {
  title: string;
  val: string;
}*/

const Navigation = ({ label, isCek, onSpeak, submit, title }) => {
    /*const {
    title,
    val,
  } = props*/ const [profileData, setProfileData] = useState("");

    const [isChecked, setIsChecked] = useState("");

    const handleClick1 = () => {
        setIsChecked(!isChecked);
    };
    const hello = () => {
        document.write("jahshshhs");
    };
    return (
        <div>
            <div class='card-nav'>
                <div class='info-nav'>
                    <button class='home'>
                        <i class='i-home fa fa-home'></i>
                    </button>
                    <button class='home2'>
                        <i class='i-home fa fa-user'></i>
                    </button>
                    <button class='home3'>
                        <i class='i-home fa fa-square-plus'></i>
                    </button>
                    <button class='home4'>
                        <i class='i-home fa fa-gear'></i>
                    </button>
                </div>
                <button class='speak' onClick={onSpeak}>
                    <i class='i-speak fa fa-microphone'></i>
                </button>
            </div>
        </div>
    );
};
export default Navigation;
