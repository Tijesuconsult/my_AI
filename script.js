const btn = document.querySelector(".talk")
const content = document.querySelector(".content")

function speak(sentence){
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

 function wishMe(){
    let day = new Date();
    let hr = day.getHours();

    if(hr >= 0 && hr < 12){
        speak('Good morning Friend');
    }
    else if(hr > 12 && hr <= 17){
        speak('Good afternoon Friend'); 
    }
    else{
        speak('Good Evening Friend');
    }
 }
 window.addEventListener('load', ()=>{
    speak("AI Activated");
    // speak("Goin online");
    wishMe(); 
 }) 
 const SpeechRecognition = window.SpeechRecognition|| window.webkitSpeechRecognition;
 const recognition = new SpeechRecognition();

 recognition.onresult = (event) =>{
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
 }

 btn.addEventListener('click', ()=>{ 
    recognition.start();
 }) 

 function speakThis(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if (message.includes ('hey') || message.includes ('hello')){
        const finalText = "Hello Friend";
        speech.text = finalText;
    }
    // else if (message.includes ('hey')){
    //     const finalText = "Hello Friend";
    //     speech.text = finalText;
    // }
    else{
        window.open(`https//www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for" + message + "on google";
        speech.text = finalText;
    }
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1; 

   window.SpeechSynthesis.speak(speech);
 }