export const chartOptions = (chartDays, chartValues) => ({
  type: "line",
  data: {
    labels: chartDays,
    datasets: [
      {
        label: "Number of patients",
        data: chartValues,
        pointHoverBackgroundColor: "#ffffff",
        pointHoverRadius: 6,
        backgroundColor: ["rgba(255, 255, 255, 0.5)"],
        borderColor: ["#ffffff"],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Dynamic of virus",
      fontSize: 25,
      padding: 30
    },
    legend: {
      position: "bottom"
    },
    tooltips: {
      callbacks: {
        labelColor: function() {
          return {
            borderColor: "#ffffff",
            backgroundColor: "#ffffff"
          };
        }
      }
    }
  }
});
