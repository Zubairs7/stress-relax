
/*sleep*/

/* scripts.js */
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab');

            contents.forEach(content => {
                if (content.id === target) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    // Show the content for the first tab by default
    if (contents.length > 0) {
        contents[0].style.display = 'block';
    }
});


// faq
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isOpen = answer.style.display === 'block';

            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');

            // Toggle current answer
            answer.style.display = isOpen ? 'none' : 'block';
        });
    });
});


// bi bo
const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3;

// Watching for selected breaths from user
numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

// Grow/Shrink Circle
const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

// Breathing Instructions
const breathTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerText = "Breath in";
  setTimeout(() => {
    instructions.innerText = "Hold Breath";
    setTimeout(() => {
      instructions.innerText = "Exhale Breath Slowly";
    }, 4000);
  }, 4000);
};

// Breathing App Function
const breathingApp = () => {
  const breathingAnimtaion = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimtaion);
      instructions.innerText = "Breathing session completed. Click 'Begin' to start another session!";
      start.classList.remove("button-inactive");
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

// Start Breathing
start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  instructions.innerText = "Get relaxed, and ready to begin breathing";
  setTimeout(() => {
    instructions.innerText = "Breathing is about to begin...";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 2000);
  }, 2000);
});

