import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PatientSummaryChart = () => {
  const data = {
    labels: ["New Patients", "Old Patients", "Total Patients"],
    datasets: [
      {
        data: [30, 40, 70],
        backgroundColor: ["#007bff", "#ffcc00", "#f6f6f6"],
      },
    ],
  };

  return (
    <div className="bg-white h-[45vh] p-10  shadow-md rounded-lg w-1/4">
      <h2 className="text-lg font-semibold mb-3">Patients Summary</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default PatientSummaryChart;
