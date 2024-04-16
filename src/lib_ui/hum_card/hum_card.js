import React, { useState, useEffect } from "react";
import "./hum.css";
import Cloud from "./cloud.js";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

/*interface Props {
  title: string;
  val: string;
}*/

const HumCard = ({ label, isCek, onCheckboxChange, submit, title }) => {
    /*const {
    title,
    val,
  } = props*/ const [profileData, setProfileData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios({
                method: "GET",
                url: "/wheater"
            })
                .then(response => {
                    const res = response.data;
                    setProfileData({
                        wh: res.wh,
                        deg: res.deg
                    });
                })
                .catch(error => {
                    if (error.response) {
                        document.write(error.response);
                        document.write(error.response.status);
                        document.write(error.response.headers);
                    }
                });
        };
        fetchData();
        const interval = setInterval(fetchData, 20000); // set interval untuk memperbarui data setiap 5 detik
    }, []);

    const [isChecked, setIsChecked] = useState("");

    const handleClick1 = () => {
        setIsChecked(!isChecked);
    };
    const hello = () => {
        document.write("jahshshhs");
    };
    return (
        <div>
            <div class='card-hum'>
                <Cloud />
                <div class='info'>
                    <h1 class='suhu'>
                        36 {/*{profileData.wh}*/}
                        <h4 class='degree'>°C {/*{profileData.deg}*/}</h4>
                    </h1>
                    <div class='line'></div>
                    <div class='dt-cnt'>
                        <h5 class='date'>Friday, 17/02/23</h5>
                    </div>
                    <h1>32 °C</h1>
                    <h6 class='info-wh'>sunny cloudy</h6>
                </div>
            </div>
        </div>
    );
};
export default HumCard;
