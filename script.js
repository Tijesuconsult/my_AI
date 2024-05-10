const btn = document.querySelector(".talk")
const content = document.querySelector(".content")
const stop = document.querySelector ('.stop')
const text = document.querySelector ('.Text')
const close = document.getElementById ('close')

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
//  const SpeechRecognition = window.SpeechRecognition|| window.webkitSpeechRecognition;
//  const recognition = new SpeechRecognition();

//  recognition.onresult = (event) =>{
//     const current = event.resultIndex;
//     const transcript = event.results[current][0].transcript;
//     content.textContent = transcript;
//     speakThis(transcript);
//     console.log(transcript);
//  }

//  btn.addEventListener('click', ()=>{ 
//     recognition.start();
//  }) 

//  function speakThis(message){
//     const speech = new SpeechSynthesisUtterance();
//     speech.text = "I did not understand what you said please try again";
//     window.speechSynthesis.speak(message)

//     if (message.includes ('hey') || message.includes ('hello')){
//         const finalText = "Hello Friend";
//         speech.text = finalText;
//     }
//     else if (message.includes ('Good afernoon')){
//         const finalText = "Good Afternoon how can i assist you";
//         speech.text = finalText;
//     }
//     else{
//         window.open(`https//www.google.com/search?=${message.replace(" ", "+")}`, "_blank");
//         const finalText = "I found some information for" + message + "on google";
//         speech.text = finalText;
//     }
//     speech.volume = 1;
//     speech.pitch = 1;
//     speech.rate = 1; 
    
//     window.SpeechSynthesis.speech();
//  }
  

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function speakThis(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    if(!message == message.includes()){
        speech.text = 'I am not yet training for your qoustion, please ask another question, thank you' 
    }
    if(message.includes('who are you')){
     speech.text = 'I a Vitual Assistant how can i help you';
    }
    if(message.includes('What is your name')){
     speech.text = 'I am Robot';
    }
    if(message.includes('Do you understand Yoruba')){
     speech.text = 'Yes i understand Yoruba Language, but am not yet training for the language';
    }
    if(message.includes('who is your boss') || message.includes('who is your constructor')){
     speech.text = 'Mr Ayoola Kolawole Blessing';
    }
    if(message.includes('AI')){
     speech.text = 'Yes, friend how are you ';
    }
    if(message.includes('can you tell my about myself?')){
     speech.text = `No i can't tell you about yourself, you know about yourself by yourself`;
    }
    window.speechSynthesis.speak(speech)
    content.appendChild(showAImsg(speech.text))
    wishMe()
}

function showAImsg(aimsg){
    let output = "";
    output+= aimsg;
    content.innerHTML = output;
    return content;
}

recognition.onresult = function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    // content.appendChild(showAImsg(transcript))
    speakThis(transcript);
}



btn.addEventListener("click", function(){
    recognition.start();
      stop.style.display = 'block'
      btn.style.display = 'none'
})
// function timeConsumingTask(){
//     const duration = 1000;
//     return new Promise(resolve =>{
//       setTimeout(()=>{
//         resolve();
//     }, duration);
//   })
//   }
stop.addEventListener("click", function(){
    recognition.stop();
    btn.style.display = 'block'
    stop.style.display = 'none';
      
})
text.addEventListener("click", function(){
    content.style.display = 'block';    
})

close.addEventListener("click", function(){
    content.style.display = 'none';    
})






 