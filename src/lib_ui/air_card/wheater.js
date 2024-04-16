import React, {
  useState,
  useEffect
} from "react";
import "./whea.css";
import '../font-awesome/css/font-awesome.min.css';
import axios from "axios";

/*interface Props {
  title: string;
  val: string;
}*/

const Wheater = ({
  label, isCek, onCheckboxChange, submit, title
}
) => {

  /*const {
    title,
    val,
  } = props*/;
  const [profileData,
    setProfileData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "GET",
        url: "/wheater",
      })
      .then((response) => {
        const res = response.data
        setProfileData(({
          wh: res.wh,
          deg: res.deg
        }))
      }).catch((error) => {
        if (error.response) {
          document.write(error.response)
          document.write(error.response.status)
          document.write(error.response.headers)
        }
      });
    }
    fetchData();
    const interval = setInterval(fetchData,
      5000); // set interval untuk memperbarui data setiap 5 detik

  }, [])

  const[isChecked,
    setIsChecked] = useState("");

  const handleClick1 = () => {
    setIsChecked(!isChecked);

  };
  const hello = () => {
    document.write("jahshshhs");
  }
  return (
    <div>
      <div class="card-wh">
       <div class="info-card">
       <h3 class="hum-room">24<h3 class="deg-room">°C</h3></h3>
       <h5 class="i-room">humidity</h5>
       <h3 class="hum-room2">24<h3 class="deg-room2">°C</h3></h3>
       <h5 class="i-room2">wheater</h5>
       <h3 class="hum-room3">24<h3 class="deg-room2">°C</h3></h3>
       <h5 class="i-room3">humidity</h5>
    </div>
    </div>
    </div>
  );
}
export default Wheater;