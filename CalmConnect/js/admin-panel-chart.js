const ctx = document.getElementById('overviewChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Normal', 'Mild', 'Moderate', 'Severe', 'Extremely Severe'],
        datasets: [{
          label: 'DASS21 Results',
          data: [53, 53, 74, 105, 1750],
          backgroundColor: [
            '#2ecc71',
            '#f1c40f',
            '#e67e22',
            '#e74c3c',
            '#c0392b'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });