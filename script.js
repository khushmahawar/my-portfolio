
  const phrases = ["a Software Developer", "a Problem Solver", "a Web Developer", "a Tech Enthusiast"];
  const typingText = document.querySelector(".typing-text");
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
      currentCharIndex--;
    } else {
      currentCharIndex++;
    }

    typingText.textContent = currentPhrase.substring(0, currentCharIndex);

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      setTimeout(() => isDeleting = true, 1000); // wait before deleting
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
  }

  document.addEventListener("DOMContentLoaded", type);


  
  function showSuccess(e) {
    e.preventDefault(); // Prevent actual form submission

    const popup = document.getElementById('successPopup');
    popup.classList.add('show');

    // Optional: Clear form inputs
    document.getElementById('contactForm').reset();

    // Hide popup after 3 seconds
    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  }
/*for entrance*/
function entrance(){
 setTimeout(function () {
  document.getElementById('entrance').style.opacity=0;
  }, 3000);
  setTimeout(function () {
    document.getElementById('entrance').style.zIndex=0;
  }, 4000);
  
}
entrance();
function hovereffectofproject(){
let image = document.querySelector(".imagealgo");
let video = document.querySelector(".videoalgo");

image.addEventListener("mouseover", () => {
  image.style.opacity=0;
  video.style.filter="drop-shadow(0 0 6px #ff4f70)";
  });


image.addEventListener("mouseout", () => {
  image.style.opacity=1
  video.style.filter = "none"; // remove shadow when not hovering
});
}
hovereffectofproject();

function hovereffectofproject2(){
let image2 = document.querySelector(".imagealgo2");
let video2 = document.querySelector(".videoalgo2");

image2.addEventListener("mouseover", () => {
  image2.style.opacity=0;
  video2.style.filter="drop-shadow(0 0 6px #ff4f70)";
  });


image2.addEventListener("mouseout", () => {
  image2.style.opacity=1
  video2.style.filter = "none"; // remove shadow when not hovering
});
}
hovereffectofproject2();


