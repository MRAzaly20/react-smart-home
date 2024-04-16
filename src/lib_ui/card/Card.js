import React, { useState } from "react";
import "./Card.css";
import "font-awesome/css/font-awesome.min.css";

/*interface Props {
  title: string;
  val: string;
}*/

const Card = ({ label, isCek, onCheckboxChange, submit, title }) => {
    /*const {
    title,
    val,
  } = props*/ const [isChecked, setIsChecked] = useState("");

    const handleClick1 = () => {
        setIsChecked(!isChecked);
    };
    const hello = () => {
        document.write("jahshshhs");
    };
    return (
        <div className={`card ${isChecked ? "card-active" : ""}`}>
            <div className={`lamp-bg ${isChecked ? "bg-active" : ""}`}>
                <i className={"fa fa-lightbulb-o"} id='lamp'>
                    {" "}
                </i>
            </div>
            <span className={`lamp-id ${isChecked ? "id-active" : ""}`}>
                {title}
            </span>
            <label class='switch'>
                <input
                    type='checkbox'
                    value={label}
                    checked={isCek}
                    onChange={() => handleClick1()}
                    onClick={onCheckboxChange}
                />
                <span class='slider'></span>
                <span class='text on'>On</span>
                <span class='text off'>Off</span>
            </label>
        </div>
    );
};
export default Card;
