import React, { useState } from "react";
import "./cloud.css";
import "font-awesome/css/font-awesome.min.css";

/*interface Props {
  title: string;
  val: string;
}*/

const Cloud = ({ label, isCek, onCheckboxChange, submit, title }) => {
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
        <div>
            <div class='cloud'></div>
        </div>
    );
};
export default Cloud;
