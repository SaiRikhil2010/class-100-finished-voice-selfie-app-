//storing the speech API in the variable
var SpeechRecognition = window.webkitSpeechRecognition;
//creating a cop of speech recognition
var recognition = new SpeechRecognition()
//function for converting speech to text and text to speech
function Start() {
    //setting the textbox empty
    document.getElementById("textbox").innerHTML=""
    //using start function
    recognition.start()
     }
     //function event
     recognition.onresult = function run(event){
         
         console.log(event)
         
         var Content=event.results[0][0].transcript
         
         console.log(Content)
        
         document.getElementById("textbox").innerHTML=Content
        
         if(Content =="take my selfie")
         {
             console.log("taking selfie ---")
             speak()
         }
         
     }

     function speak() {
         //storing the API in the variable synth
        var synth=window.speechSynthesis 
        //taking words from the text box and storing it in variable
        speak_data="Taking your selfie in 5 seconds"
        //proccesing the text and storing it in a variable
         var utterThis=new SpeechSynthesisUtterance(speak_data)
         //speaking what is in utterThis
         synth.speak(utterThis)
         //attaching camera to the html element
         Webcam.attach(camera)

          setTimeout(function(){
             take_snapshot()
             save()
            },5000)
            
     }

     Webcam.set({
         //width of camera
         width:370,
         //height of camera
         height:250,
         //format of the selfie that the camera takes
         image_format:'png',
         //quality of the selfie that the camera takes
         png_quality:90
     })
     function take_snapshot()
     {
         Webcam.snap(function(data_uri){
             document.getElementById("result").innerHTML = "<img id='selfie_img'  src=' "+data_uri+"'>"
         })
     }

     function save()
     {
         link=document.getElementById("link")
         image=document.getElementById("selfie_img").src
         link.href=image
         link.click()
     }

     //storing the html element camera in the variable camera
     camera=document.getElementById("camera")

