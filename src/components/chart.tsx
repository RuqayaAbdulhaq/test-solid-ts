import {createEffect, JSX, onCleanup} from "solid-js";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";

Chart.register(annotationPlugin);


export const CanvasLineChart = (props: {
    class?: string;
    style?: JSX.CSSProperties;
    xAxisData: number[];
    xAxisLabels: string[];
    beginAtZero: boolean;
  }) => {
    let charRef!: HTMLCanvasElement;
    createEffect(() => {
  
      const chart = new Chart(charRef, {
        type: "line",
        data: {
          labels: props.xAxisLabels,
          datasets: [
            {
              label: "count:",
              data: props.xAxisData,
              borderColor: "#5e72d7",
              pointBackgroundColor: "#5e72d7",
              pointBorderColor: "#5e72d7",
              pointBorderWidth: 1,
              borderWidth: 1.5,
              cubicInterpolationMode: "default",
              fill: false,
              pointStyle: "circle",
              pointRadius: props.xAxisLabels.map((label, index) => {return index === ( props.xAxisLabels.length -1 ) ? 2 : 0})
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                display: false,
              },
              grid:{
                display: false
              },
              border: {
                display: false
              }
            },
            x: {
                bounds: "ticks",
                grid:{
                    display: false
                  },
                  border: {
                    display: true
                  },
                  ticks: {
                    color: "#777f91",
                    maxTicksLimit: 2,
                    autoSkip: false,
                    align: "inner",
                    font: {
                        size: 13,
                    }
                  },
            }
          },
          layout: {
            autoPadding: false,
          }
        },
      });
      onCleanup(() => chart?.destroy?.());
    });
  
    return <canvas ref={charRef} style={props.style} class={`${props.class}`}/>;
  };