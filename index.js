
// When button is pressed ******************************************************

for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

            

            let letter = this.innerHTML;

                switch(letter){
                    case "q":
                    var crash = new Audio("sounds/crash.mp3");
                    return crash.play();
                    break;
                    case "w":
                    var kickBass = new Audio("sounds/kick-bass.mp3");
                    return kickBass.play();
                    break;
                    case "e":
                    var snare = new Audio("sounds/snare.mp3");
                    return snare.play();
                    break;
                    case "r":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    return tom1.play();
                    break;
                    case "t":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    return tom2.play();
                    break;
                    case "y":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    return tom3.play();
                    break;
                    case "u":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    return tom4.play();
                    break;
                    default:alert("Press/Click one of the available Keys")
                }

    })
}

// When button is pressed *********************************

const playSound = (sound) => {
    const soundFile = new Audio(`sounds/${sound}.mp3`);
    return soundFile.play();
}

const animateButton = (buttonClass) => {
    const el = document.getElementsByClassName(buttonClass)[0];
    el.className += " markButton2";
    setTimeout(() => { el.className = el.className.replace(" markButton2", ""); }, 300)
    
}
   
document.addEventListener("keypress", function(pressKey) {

                    switch(pressKey.key){
                        case "q":
                        // var crash = new Audio("sounds/crash.mp3");
                        // return crash.play();
                        playSound("crash")
                        animateButton("q")
                        break;
                        case "w":
                        playSound("kick-bass")
                        animateButton("w")
                        break;
                        case "e":
                        playSound("snare")
                        animateButton("e")
                        break;
                        case "r":
                        playSound("tom-1")
                        animateButton("r")
                        break;
                        case "t":
                        playSound("tom-2")
                        animateButton("t")
                        break;
                        case "y":
                        playSound("tom-3")
                        animateButton("y")
                        break;
                        case "u":
                        playSound("tom-4")
                        animateButton("u")
                        break;
                        default:alert("Press/Click one of the available Keys")
                        
                }
            

          
            // test function
            // if (pressKey.key === "w" ) {
            //     var audio = new Audio("sounds/tom-1.mp3");
            //     return audio.play();
            // }
        });
