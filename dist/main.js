const suns = document.querySelectorAll(".sun");

function setProperty(duration) {
  for (let i = 0; i < suns.length; i += 1) {
    suns[i].style.setProperty("--animation-time", ` ${duration[i]}s`);
    // const flip = Math.floor(Math.random() * 2) === 0;
    // if (flip) {
    //   suns[i].style.setProperty("--animation-direction", "alternate");
    // } else {
    //   suns[i].style.setProperty("--animation-direction", "alternate-reverse");
    // }
  }
}

function getRandomInt(inputMin, inputMax) {
  return Math.floor(Math.random() * (inputMax - inputMin) + inputMin);
}

function changeAnimationTime() {
  const durationArray = [];
  durationArray[0] = getRandomInt(2, 6);
  durationArray[1] = getRandomInt(2, 6);

  if (durationArray[0] === durationArray[1]) {
    durationArray[1] += 2;
  }

  setProperty(durationArray);
}
changeAnimationTime();
setInterval(changeAnimationTime, 7000);
