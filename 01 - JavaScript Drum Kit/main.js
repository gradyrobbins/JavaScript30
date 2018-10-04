console.log("grady")

// add event listeners
window.addEventListener('keydown', function(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return //stops the function if keydown doesn't have corresponding data-key"
    console.log(audio)
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing');
    console.log(key)
})
