import React, {
  useEffect,
  useState,
  useRef
} from 'react';
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';
import axios from "axios";
import Navigation from "../lib_ui/navigation/nav.js";
import "./NavBar.css";

const NavBar = () => {
  const spanRef = useRef(null);
  const divRef = useRef(null);
  const [message,
    setMessage] = useState('');
  const timeoutRef = useRef(null);
  const [apiResponse,
    setApiResponse] = useState('');
  const [text,
    setText] = useState('');
  const commands = [{
    command: 'reset',
    callback: () => resetTranscript()
  },
    {
      command: 'shut up',
      callback: () => setMessage('I wasn\'t talking.')
    },
    {
      command: 'Hello',
      callback: () => setMessage('Hi there!')
    },
  ]
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({
      commands
    });

  const handleApiResponse = (data) => {
    setApiResponse(data.choices[0].text);
  };

  const sendDataAPI = (data_api) => {
    const response = fetch('/api/send_ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data_api)
    });
    const result = response.json();
    return result;
  };

  const handleSubmit = (data) => {
    axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: {
        prompt: `
        ######Berikut percakapan dengan asisten AI. Asistennya bernama JarvisAI, sangat membantu, kreatif, pintar, sangat ramah, romantis. Assisten akan menjawab semua pertanyaan dan akan mencocokan makna pertanyaan dengan instruksi dibawah ini dan menjawab nya sesuai dengan instruksi dibawah:
        1. periksa makna kalimat ${data}, jika memiliki makna yang sama untuk menyalakan lampu B dan lampu A atau menyalakan semua lampu maka balas hanya dengan "on lampu B on lampu A"
        2. periksa makna kalimat ${data}, jika memiliki makna yang sama untuk memmatikan lampu B dan matikan lampu A maka balas hanya dengan "off lampu B off lampu A"
        3. periksa makna kalimat ${data}, jika memiliki makna yang sama dengan "nyalakan lampu ruangan tamu" maka balas hanya dengan ""on lampu Tamu""
        4. periksa makna kalimat ${data}, jika memiliki makna yang sama dengan "matikan lampu ruangan tamu" maka balas hanya dengan '"off lampu Tamu"'
        5. periksa makna kalimat ${data}, jika memiliki makna yang sama dengan "berapa suhu di kota" maka balas hanya dengan "suhu kota 24°C"
        6. periksa makna kalimat ${data}, jika memiliki makna yang sama dengan "nyalakan lampu kamar" maka balas hanya dengan "on lampu kamar"
        7. periksa makna kalimat ${data}, jika memiliki makna yang sama dengan "matikan lampu ruangan kamar" maka balas hanya dengan "off lampu kamar"
        8. periksa makna kalimat ${data}, jika memiliki makna yang sama untuk meminta suhu ruangan  maka balas hanya dengan "suhu ruangan saat ini 20°C"
        \nHuman: ${data} \n\nAI:
        `,
        max_tokens: 1000,
        temperature: 0.5,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        model: "text-davinci-003",
        stop: ["\n", "Human:", "AI:"]
      },
      headers: {
        "Content-Type": "application/json",
        Authorization:
        "Bearer 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"
      }
    })
    .then((res) => {
      const api_ai = res.data.choices[0].text;
      setApiResponse(api_ai);
      alert(api_ai);
      const response = fetch('/api/send_ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          api_ai
        )
      });
      const result = response.json();
      return result;
    })
    .catch((e) => {
      console.log(e.message, e);
      console.log(e.message, e);
    });

  };


  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript);
    }
  },
    [interimTranscript,
      finalTranscript]);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
    });

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setApiResponse("");
      setText(spanRef.current.textContent)
      handleSubmit(spanRef.current.textContent);
      SpeechRecognition.stopListening();
      resetTranscript();
      /*sendDataAPI(divRef.current.textContent);*/
    }, 5000);

  };
  return(
    <div>
      <Navigation class="nav-cnt"
      onSpeak={listenContinuously}
      />
       <h1 class="transcript" ref={spanRef}>{transcript}</h1>
       <h1 class="res" ref={divRef}>
        { apiResponse }
    </h1>
    </div>
  );

}

export default NavBar;