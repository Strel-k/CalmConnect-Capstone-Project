function updateProgressBar(currentIndex, totalQuestions) {
  const progressElement = document.getElementById("progress-bar");
  const percentage = ((currentIndex + 1) / totalQuestions) * 100;
  progressElement.style.width = `${percentage}%`;
}

  document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      // auto-select last clicked value or move to next if default
    }
  });