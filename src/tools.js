/*import React, { useState } from "react";
import "./glassmorphism.css";
import axios from "axios";

function App () {
  const [response, setResponse] = useState("");
  const [teks, setPrompt] = useState("");
 const handleSubmit = () => {
   axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: {
    prompt: teks,
    max_tokens: 1000,
    temperature: 0.5,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    model: "text-davinci-003"
  },
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer"
      }
    })
      .then((res) => {
        setResponse(res.data.choices[0].text);
      })
      .catch((e) => {
        document.write(e.message, e);
        console.log(e.message, e);
      });
};
  return (
    <div>
      <input
          type="text"
          value={teks}
          placeholder="Enter prompt here"
          onChange={(e) => setPrompt(e.target.value)}
        />
      <button onClick={handleSubmit}>Submit</button>
      <textarea value={response}></textarea>
      <button className="button">hello</button>
    </div>
  );
};

export default App;
*/

/*import React, { useState } from 'react';
import axios from "axios";

function App() {
  const [profileData, setProfileData] = useState("");

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        document.write(error.response)
        document.write(error.response.status)
        document.write(error.response.headers)
        }
    })}

  return (
    <div>
      <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
    </div>
  );
}

export default App;
*/

/*
import React from 'react';

const Card = ({ children }) => (
  <div className="card">
    {children}

    <style jsx>{`
      .card {
        background-color: #f5f5f5;
        border-radius: 10px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1), -2px -2px 10px rgba(255, 255, 255, 0.5);
        display: inline-block;
        padding: 20px;
        position: relative;
        width: 300px;
        height: 400px;
      }
    `}</style>
  </div>
);

export default Card;

*/
