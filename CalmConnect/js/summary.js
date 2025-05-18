function showResults() {
    const container = document.querySelector(".question-container");
    
    const categories = {
      anxiety: calculateAnxietyScore(answers),
      depression: calculateDepressionScore(answers),
      stress: calculateStressScore(answers)
    };
  
    container.innerHTML = `
  <div class="results-wrapper">
    <h3>Thank you for completing the test!</h3>
    <p>Here’s your mental health snapshot:</p>
    <div class="results-grid">
      <div class="result-card">
        <h4>Anxiety</h4>
        <p class="score">${categories.anxiety.score} / 63</p>
        <p class="level">${categories.anxiety.level}</p>
      </div>
      <div class="result-card">
        <h4>Depression</h4>
        <p class="score">${categories.depression.score} / 63</p>
        <p class="level">${categories.depression.level}</p>
      </div>
      <div class="result-card">
        <h4>Stress</h4>
        <p class="score">${categories.stress.score} / 63</p>
        <p class="level">${categories.stress.level}</p>
      </div>
    </div>
    <button id="try-again-btn">Try Again</button>
  </div>
`;
document.getElementById("try-again-btn").addEventListener("click", () => {
    const container = document.querySelector(".question-container");
  
    // 🧹 1. Clean up any previous fade classes
    container.classList.remove("fade-in", "fade-out");
  
    // 🛠️ 2. Force reflow to restart transition
    void container.offsetWidth;
  
    // 🎬 3. Start fade-out
    container.classList.add("fade-out");
  
    // ⏱️ 4. After fade-out, restart quiz with fade-in
    setTimeout(() => {
      currentIndex = 0;
      answers.length = 0;
  
      renderQuizLayout();
  
      container.classList.remove("fade-out");
      void container.offsetWidth; // force reflow again
      container.classList.add("fade-in");
  
      loadQuestion();
    }, 500); // must match CSS transition time
  });
}
  // Replace these with real calculations
  function calculateAnxietyScore(answers) {
    const score = answers.slice(1, 7).reduce((a, b) => a + b, 0) * 2;
    return { score, level: getLevel(score) };
  }
  
  function calculateDepressionScore(answers) {
    const score = answers.slice(7, 14).reduce((a, b) => a + b, 0) * 2;
    return { score, level: getLevel(score) };
  }
  
  function calculateStressScore(answers) {
    const score = answers.slice(14, 21).reduce((a, b) => a + b, 0) * 2;
    return { score, level: getLevel(score) };
  }
  
  function getLevel(score) {
    if (score >= 0 && score <= 9) return "Normal";
    if (score <= 13) return "Mild";
    if (score <= 20) return "Moderate";
    if (score <= 27) return "Severe";
    return "Extremely Severe";
  }
  