console.log("grady")

// add event listeners


function playSound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return //stops the function if keydown doesn't have corresponding data-key"
    console.log(audio)
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing');
    console.log(key)
    
    
}

const keys=document.querySelectorAll('.key');
console.log(keys)

function removeTransition(e) {
    if(e.propertyName !=='transform') return; // skip it if its not a transform
    console.log(e.propertyName)
    this.classList.remove('playing');
}
window.addEventListener('keydown',playSound)

keys.forEach(key => key.addEventListener('transitionend', removeTransition))