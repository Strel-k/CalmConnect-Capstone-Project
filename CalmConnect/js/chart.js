let chart; // hold chart instance

const ctx = document.getElementById("dassChart").getContext("2d");

const chartData = {
  labels: ['Anxiety', 'Depression', 'Stress'],
  datasets: [{
    label: 'Average Scores',
    data: [12, 18, 22],
    backgroundColor: ['#2ecc71', '#3498db', '#e74c3c']
  }]
};

function renderChart(type = 'bar') {
  if (chart) chart.destroy(); // destroy previous chart
  chart = new Chart(ctx, {
    type,
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: type !== 'bar' // hide legend only in bar chart
        }
      },
      scales: type === 'bar' || type === 'line' ? {
        y: { beginAtZero: true, max: 42 }
      } : {} // no y-axis for pie
    }
  });
}

// Initial render
renderChart();

// Handle dropdown change
document.getElementById("chartType").addEventListener("change", (e) => {
  renderChart(e.target.value);
});
