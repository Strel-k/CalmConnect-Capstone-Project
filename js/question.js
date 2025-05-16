const questions = [
    "I found it hard to wind down.",
    "I was aware of dryness of my mouth.",
    "I couldn't seem to experience any positive feeling at all.",
    // ... add the rest of the 21 questions
  ];
  
  let currentIndex = 0;
  let answers = [];
  
  function loadQuestion() {
    if (currentIndex >= questions.length) {
      alert("Test complete! Here are your responses: " + JSON.stringify(answers));
      return;
    }
  
    document.getElementById("question-text").textContent = questions[currentIndex];
    document.getElementById("progress").textContent = `${currentIndex + 1} / ${questions.length}`;
  }
  
  document.querySelectorAll(".scale-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const value = parseInt(btn.getAttribute("data-value"));
      answers.push({ question: currentIndex + 1, score: value });
      currentIndex++;
      loadQuestion();
    });
  });
  
  loadQuestion();