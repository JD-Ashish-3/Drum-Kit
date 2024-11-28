var l=document.querySelectorAll(".drum").length;
for(var i=0;i<l;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",soundlisten);
}
function soundlisten()
{
    // console.log(this.innerHTML());
    // this.style.color="white";
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    makeanimation(buttonInnerHTML);
    switch (buttonInnerHTML) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();    
            break;
            case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();    
            break;
            case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();    
            break;
            case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();    
            break;
            case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();    
            break;
            case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();    
            break;
            case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();    
            break;
        default:
            console.log();
            break;
    }
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    makeanimation(event.key);
});

function makeSound(key)
{
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();    
            break;
            case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();    
            break;
            case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();    
            break;
            case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();    
            break;
            case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();    
            break;
            case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();    
            break;
            case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();    
            break;
        default:
            console.log();
            break;
    }

}

function makeanimation(currentkey)
{
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
    },100);

}



