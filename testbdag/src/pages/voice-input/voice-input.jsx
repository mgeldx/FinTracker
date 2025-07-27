import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceInputComponent = () => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    resetTranscript
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (!isMicrophoneAvailable) {
    return <span>Please grant microphone access.</span>;
  }

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: 'en-ZA' });

  const stopListening = () => SpeechRecognition.stopListening();

  return (
    <div style={{ padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
      <h3>Voice Input</h3>
      <p>Microphone: <strong>{listening ? 'on' : 'off'}</strong></p>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={stopListening}>Stop Listening</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
      <p><strong>Transcript:</strong> {transcript}</p>
    </div>
  );
};

export default VoiceInputComponent;
