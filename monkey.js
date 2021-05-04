const soundBtn = document.querySelector('.play_sound_monkey');
let audioMessi = document.querySelector('#audio');

soundBtn.addEventListener('click',()=>{
    audioMessi.play();
})