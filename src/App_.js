import React, {
  useEffect,
  useState
} from 'react';
import {
  useForceUpdate
} from './useForceUpdate';

import Linked from './operator_panel/link-panel.js';
import Humidity from './operator_panel/humidity.js';
import WheaterUI from './operator_panel/wheater.js';
import NavBar from './operator_panel/NavBar.js';
import "./App.css"


function App() {

  const [data,
    setData] = useState({
      message: 'Hello, Flask!'
    });

  const forceUpdate = useForceUpdate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendData(data);
    console.log(result);
  };

  const handleChange = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value
    });
  };

  const sendData = (data) => {
    const response = fetch('/api/send_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = response.json();
    return result;
  };
  useEffect(() => {
    forceUpdate();
  }, []);

  ///////////////////////
  //     FUNGSI 2     //
  /////////////////////

  return(
    <div>
  <div class="blur"></div>
    {/*<form onSubmit={handleSubmit}>
      <input type="text" name="message" onChange={handleChange} />
      <button type="submit">Send Data</button>
    </form>*/}
    <div>
     <Humidity />
     <div class="ui-wh">
      <WheaterUI />
    </div>
    </div>
      <div>
      {/*<button value="data kamu" onChange={handleSubmit} onClick={handleChange}>submit</button>*/}
      <Linked />
    <div class="nav">
      <NavBar />
      </div>
    </div>
    <div class="blur2"></div>
    <div class="blur3"></div>
    <div class="blur4"></div>
      {
      /*<form onSubmit={handleSubmit2}>
      <input type="text" name="message2" onChange={handleChange2} />
      <button type="submit">Send Data2</button>
      </form>*/
      }
    </div>

  );
}

export default App;