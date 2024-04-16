import React, { useState, useEffect } from "react";

import Card from "../lib_ui/card/Card.js";
/*import ApiUrl from "../lib_backend/Api.js";*/

const Linked = () => {
    const [selected, setSelected] = useState("");
    const [checkboxValue, setCheckboxValue] = useState(false);

    const handleCheckboxChange = event => {
        const { value } = event.target;
        if (selected.includes(value)) {
            setSelected(selected.filter(item => item !== value));
            setData2({
                ...data2,
                message2: selected.filter(item => item !== value)
            });
        } else {
            setSelected([...selected, value]);
            setData2({
                ...data2,
                message2: value
            });
        }
    };

    const [data2, setData2] = useState({
        message2: "hahaj"
    });

    /*const handleSubmit2 = (e) => {
    e.preventDefault();
    const result2 = sendData2(data2);
    console.log(result2);
  };*/

    const handleChange2 = event => {
        setData2({
            ...data2,
            message2: selected
        });
    };

    /*  /*useEffect(()=> {
    const sendData2 = async () => {
      const rest = await ApiUrl(selected);
    }; sendData2();
  }, [selected]);
*/
    useEffect(() => {
        const sendData2 = async () => {
            const response = await fetch("/api/kirim", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(selected)
            });
            const result2 = response.json();
            return result2;
        };
        sendData2();
    }, [selected]);

    return (
        <div>
            <div className='lamp'>
                <Card
                    label='Option 2'
                    isCek={selected.includes("Option 2")}
                    onCheckboxChange={handleCheckboxChange}
                    title='room lamp'
                />
            </div>
            <div className='lamp2'>
                <Card
                    label='Option 1'
                    isCek={selected.includes("Option 1")}
                    onCheckboxChange={handleCheckboxChange}
                    title='living room lamp '
                />
            </div>
            <div className='lamp3'>
                <Card
                    label='Option 3'
                    isCek={selected.includes("Option 3")}
                    onCheckboxChange={handleCheckboxChange}
                    title='kitchen light'
                />
            </div>
            <div className='lamp4'>
                <Card
                    label='Option 4'
                    isCek={selected.includes("Option 4")}
                    onCheckboxChange={handleCheckboxChange}
                    title='porch light'
                />
            </div>
        </div>
    );
};

export default Linked;
