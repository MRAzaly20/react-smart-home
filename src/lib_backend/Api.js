import {
  useState,
  useEffect
} from "react";

const ApiUrl = (body) => {
  const [data,
    setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/kirim", {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = response.json();
      return json;;
    };
    fetchData();
  }, [body]);

};

export default ApiUrl;