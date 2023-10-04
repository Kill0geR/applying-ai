const textItems = ["Lebenslauf-Analyse mit KI", "KI-Bewerbungsassistent", "Automatisierte Bewerbungshilfe", "Effizientes Bewerben"];
let currentItemIndex = 0;

var textWrapper = document.querySelector('.ml13');

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
function updateTextContent() {
  textWrapper.textContent = textItems[currentItemIndex];
  currentItemIndex = (currentItemIndex + 1) % textItems.length;
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); // Reapply letter wrapping


}


function startTextAnimation() {
  // Create an animation timeline
  const x = anime.timeline({loop: false})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 100 + 30 * i,
    autoplay: true
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 700,
    delay: (el, i) => 100 + 30 * i
  });

  //updateTextContent();
  // Initially set the text content and apply letter wrapping to the first item
}
// Call the function to start the animation
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function main(){
  while (true) {
    await sleep(2200);
    startTextAnimation();
    await sleep(4000);
    updateTextContent()
  }

}
main();

// To restart the animation with a new text, simply call the function again
// Example: startTextAnimation();
