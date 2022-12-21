<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

const plugin = {
  id: "increase-legend-spacing",
  beforeInit(chart) {
    // Get reference to the original fit function
    const originalFit = chart.legend.fit;

    // Override the fit function
    chart.legend.fit = function fit() {
      // Call original function and bind scope in order to use `this` correctly inside it
      originalFit.bind(chart.legend)();
      // Change the height as suggested in another answers
      this.height += 20;
    };
  },
};

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels,
  plugin
);

export default {
  name: "BarChart",
  components: { Bar },
  props: ["pollData", "voteData"],
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            grid: {
              drawOnChartArea: false,
            },
          },
          y: {
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              boxWidth: 0,
              font: {
                size: 18,
                weight: "bold",
              },
              padding: 0.15,
            },
            onClick: (e) => e.stopPropagation(),
          },
          datalabels: {
            anchor: "end",
            align: "top",
            formatter: Math.round,
            font: {
              weight: "bold",
            },
          },
        },
      },
    };
  },
  computed: {
    chartData() {
      //   console.log(this.pollData);
      //   console.log(this.voteData);
      //const labels = this.pollData.OPTIONS.map((opt) => opt.value);
      const datasetLabel = this.pollData.QUESTION;
      const voteObj = this.voteData.reduce((counts, element) => {
        counts[element] = (counts[element] || 0) + 1;
        return counts;
      }, {});
      const vote = Object.keys(voteObj);
      const occurence = Object.values(voteObj);
      console.log(vote, occurence);
      return {
        labels: vote,
        datasets: [
          {
            label: datasetLabel,
            data: occurence,
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            backgroundColor: "rgb(23, 171, 218)",
            borderColor: "#fff",
            borderWidth: 1,
          },
        ],
      };
    },
  },
};
</script>
