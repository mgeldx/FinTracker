// VoiceInputComponent.tsx
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './voice-input.css';
import {Contract} from "ethers";

interface VoiceInputComponentProps {
    contract: Contract;
}

const VoiceInputComponent: React.FC<VoiceInputComponentProps> = ({ contract }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
    const [location, setLocation] = React.useState<string>("Unknown");

    React.useEffect(() => {
        if (!navigator.geolocation) {
            console.error("Geolocation not supported");
            return;
        }

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const locStr = `${position.coords.latitude.toFixed(6)},${position.coords.longitude.toFixed(6)}`;
                setLocation(locStr);
            },
            (error) => {
                console.error("Geolocation error:", error);
                setLocation("Unavailable");
            },
            { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);
  const startListening = () => {
    SpeechRecognition.startListening({continuous: true}).then(r =>{
        console.log(r)
    });
  };

    const stopListening = async () => {
        SpeechRecognition.stopListening();
        await new Promise(res => setTimeout(res, 500));
        if (!contract) {
            console.error('Contract is not initialized yet.');
            return;
        }
        const text = transcript;
        // const currentLocation = location;
        // const timestamp = Math.floor(Date.now() / 1000);

        try {
            const tx = await contract.storeRecord(text);
            await tx.wait();
            resetTranscript();

        } catch (error) {
            console.error('Error storing record:', error);
        }
    };


    if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
      <div className="voice-input">
        <p>Microphone: {listening ? 'On' : 'Off'}</p>
        <div className="voice-btns">
          <button onClick={startListening}>Start</button>
          <button onClick={stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>

          <p className="transcript">Transcript: {transcript}</p>
          {/*<p className="transcript">Location: {transcript}</p>*/}
      </div>

  );
};

export default VoiceInputComponent;
