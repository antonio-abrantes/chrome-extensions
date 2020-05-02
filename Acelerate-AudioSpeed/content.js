var data = new Date();
console.log("Javascrip iniciado "+ data.getMilliseconds() );

const interval = setInterval(() => {
  const header = document.querySelector("._3auIg");

  if (header) {
    console.log(header);
    clearInterval(interval);


    const btnAumentar = document.createElement("button");
    btnAumentar.innerHTML = "+0.25x";
    btnAumentar.classList.add('twoTimesButton');
    header.appendChild(btnAumentar);

    const btnDiminuir = document.createElement("button");
    btnDiminuir.innerHTML = "-0.25x";
    btnDiminuir.classList.add('twoTimesButton');
    header.appendChild(btnDiminuir);

    btnAumentar.addEventListener('click', ()=> {
      const audios = document.querySelectorAll("audio");
      audios.forEach(audio => {
        audio.playbackRate = audio.playbackRate + 0.25;
      });
    })

    btnDiminuir.addEventListener('click', ()=> {
      const audios = document.querySelectorAll("audio");
      audios.forEach(audio => {
        if(audio.playbackRate > 1){
          audio.playbackRate = audio.playbackRate - 0.25;
        }
      });
    })

  }

}, 1000);


function msg() {
  console.log("Extensão funcionando ok");
}
