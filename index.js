

//function to know which button is clicked or typed

function WordListen(key){

        switch (key) {

            case 'w':
                var crash=new Audio("sounds/tom-4.mp3");
                crash.play();
                break;
            case 'a':
                var kick_bass=new Audio("sounds/tom-2.mp3");
                kick_bass.play();
                break;
            case 's':
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case 'd':
                var tom_1=new Audio("sounds/tom-1.mp3");
                tom_1.play();
                break;
            case 'j':
                var tom_2=new Audio("sounds/kick-bass.mp3");
                tom_2.play();
                break;
            case 'k':
                var tom_3=new Audio("sounds/tom-3.mp3");
                tom_3.play();
                break;
            case 'l':
                var tom_4=new Audio("sounds/crash.mp3");
                tom_4.play();
                break;

            default:console.log("select a btn")
                break;
        }
}

//function to change CSS of button when it is clicked or typed :

function selectedBtn(bgBtn){
    var animate=document.querySelector("."+bgBtn);
    animate.classList.add("pressed");

    setTimeout(function()  {
        animate.classList.remove("pressed");
    }, 100);
}

//play sound on Button press:

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",btnClickSoundOn);

    function btnClickSoundOn(){

        var soundOnClick=this.innerHTML;


        //passing the innerHTML to the function that checks which button was pressed via switch case:
        WordListen(soundOnClick);

        //passing the innerHTML to the function that changes the CSS when the button was pressed:
        selectedBtn(soundOnClick);
       
    }
}
 
//play sound on key press:

document.addEventListener("keydown",function(keyPressed){
    
    //passing the innerHTML to the function that checks which word was typed via switch case:
    WordListen(keyPressed.key);


    //passing the innerHTML to the function that changes the CSS when the alphabet was typed:
    selectedBtn(keyPressed.key);

})