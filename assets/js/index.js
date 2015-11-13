// var introMessage = "Hello there. . . Welcome to terminal. This terminal is very simple. For example, to login type login and so on. Hope you have fun and enjoy. ";
var introMessage = "Hello there";
var introSpeech = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
introSpeech.voice = voices[1];
introSpeech.voiceURI = 'native';
introSpeech.volume = 1; // 0 to 1
introSpeech.rate = 0.9; // 0.1 to 10
introSpeech.pitch = 0.9; //0 to 2
introSpeech.text = introMessage;
introSpeech.lang = 'en-US';
window.speechSynthesis.speak(introSpeech);


// var msg = new SpeechSynthesisUtterance();
// var voices = window.speechSynthesis.getVoices();
// msg.voice = voices[10]; // Note: some voices don't support altering params
// msg.voiceURI = 'native';
// msg.volume = 1; // 0 to 1
// msg.rate = 1; // 0.1 to 10
// msg.pitch = 2; //0 to 2
// msg.text = 'Hello World';
// msg.lang = 'en-US';