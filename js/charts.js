let viewsChart;

function renderViewsChart(values) {
  const ctx = document.getElementById("viewsChart");

  if (viewsChart) viewsChart.destroy();

  viewsChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: values.map((_, i) => i + 1),
      datasets: [{
        data: values,
        borderColor: "#1877f2",
        borderWidth: 2,
        tension: 0.35,
        pointRadius: 0
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { grid: { color: "#e4e6eb" } }
      }
    }
  });
}
