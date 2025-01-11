document.addEventListener("DOMContentLoaded", function(){
  function createDoughnutChart(canvasId, percentage) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [percentage, 100 - percentage],
          backgroundColor: ['#9fb0ff', '#ecf0f1'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        cutout: '75%', 
        animation: {
          animateRotate: true,
          duration: 2000
        },
        plugins: {
          tooltip: { enabled: false },
          legend: { display: false },
          title: { display: false }
        }
      }
    });
  }
  
  
  createDoughnutChart('html5-chart', 95);
  createDoughnutChart('css3-chart', 85);
  createDoughnutChart('jquery-chart', 80);
  createDoughnutChart('wordpress-chart', 80);
  createDoughnutChart('photoshop-chart', 70);
  createDoughnutChart('illustrator-chart', 65);
})
