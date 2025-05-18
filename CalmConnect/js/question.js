function renderQuizLayout() {
    const container = document.querySelector(".question-container");
    container.classList.remove("fade-out");
    container.classList.add("fade-in");
    container.innerHTML = `
      <h3 id="question-text">Loading question...</h3>
      <div class="scale-options">
        <button class="scale-btn" data-value="0">😐 0</button>
        <button class="scale-btn" data-value="1">🙂 1</button>
        <button class="scale-btn" data-value="2">😕 2</button>
        <button class="scale-btn" data-value="3">😟 3</button>
      </div>
      <div class="progress-container">
        <div class="progress-bar" id="progress-bar"></div>
      </div>
      <div class="question-progress">
        <p id="progress">1 / 21</p>
      </div>
    `;
  
    // Re-bind button listeners after rebuilding the layout
    document.querySelectorAll(".scale-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const value = parseInt(btn.getAttribute("data-value"));
        answers.push(value);
        currentIndex++;
        loadQuestion();
      });
    });
  }
  

const questions = [
    "I found it hard to wind down.",
    "I was aware of dryness of my mouth.",
    "I couldn't seem to experience any positive feeling at all.",
    "Are you gay?"
  ];
  
  let currentIndex = 0;
  const answers = [];
  
  function loadQuestion() {
    if (currentIndex >= questions.length) {
      showResults(); 
      return;
    }
  
    document.getElementById("question-text").textContent = questions[currentIndex];
    document.getElementById("progress").textContent = `${currentIndex + 1} / ${questions.length}`;
  
    updateProgressBar(currentIndex, questions.length);
  }
  
  // Hook answer buttons
  document.querySelectorAll(".scale-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const value = parseInt(btn.getAttribute("data-value"));
      answers.push(value);
      currentIndex++;
      loadQuestion();
    });
  });
  
  loadQuestion();