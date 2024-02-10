import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
  PointElement,
  LineElement,
  Filler
} from "chart.js";
import { Bar, Doughnut, Pie,Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);
const months = ["January", "February", "March", "April", "May", "June", "July"];

interface BarchatProps {
  horizantal?: boolean;
  data_1:number [];
  data_2:number [];
  title_1: string;
  title_2: string;
  bgcolor_1: string;
  bgcolor_2: string;
  labels: string[];
}

export const BarChart = ({
  data_1=[],
  data_2=[],
  horizantal = false,
  title_1,
  title_2,
  bgcolor_1,
  bgcolor_2,
  labels = months,
}: BarchatProps) => {


  const options:ChartOptions<"bar"> = {
    responsive: true,
    indexAxis:horizantal?"y" : "x",

    plugins: {
      legend: {
       display : false,
      },
      title: {
        display: true,
       
      },
    },
    scales:{
      y:{
        beginAtZero:true,
        grid:{
          display:false,
        }
      },
      x:{
        grid:{
          display:false,
        }
      },
    },
  };

 

  const data:ChartData<"bar",number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgcolor_1,
        barThickness:'flex',
        barPercentage:1,
        categoryPercentage:0.4
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgcolor_2,
        barThickness:'flex',
        barPercentage:1,
        categoryPercentage:0.4
      },
    ],
  };
  return <Bar width={horizantal?"200%" : ""} options={options} data={data} />;
};

interface DoughnutChartProps{
  labels:string[];
  data:number [];
  backgroundColor: string[];
  cutout?:number| string;
  legends?:boolean;
  offset?:number;
 
}

export const DoughnutChart=({
  labels,
  data,
  backgroundColor,
  cutout,
  legends=true,
  offset,

}:DoughnutChartProps)=>{
   
const doughnutData:ChartData<"doughnut",number[],string>={
    labels,
    datasets:[
      {
        data,
        backgroundColor,
        borderWidth:0,
        offset,
      },
    ],

};

const doughnutOptions:ChartOptions<"doughnut">={
  responsive:true,
  plugins:{
    legend:{
      display:legends,
      position:"bottom",
      labels:{
        padding:40,
      },
    },
  },
  cutout,
};

  return <Doughnut data={doughnutData} options={doughnutOptions}/>;
};

//FOR THE PIE CHART

interface PieChartProps{
  labels:string[];
  data:number [];
  backgroundColor: string[];
  offset?:number;
 
}

export const PieChart=({
  labels,
  data,
  backgroundColor,
  offset,

}:PieChartProps)=>{
   
const pieChartData:ChartData<"pie",number[],string>={
    labels,
    datasets:[
      {
        data,
        backgroundColor,
        borderWidth:1,
        offset,
      },
    ],

};

const pieChartOptions:ChartOptions<"pie">={
  responsive:true,
  plugins:{
    legend:{
      display:false,
     
    },
  },
};

  return <Pie data={pieChartData} options={pieChartOptions}/>;
}


interface LineChartProps {
  data: number[];
  label: string;
  backgroundColor: string;
  borderColor: string;
  labels: string[];
}

export const LineChart = ({
  data,
  label,
  backgroundColor,
  borderColor,
  labels = months,
}: LineChartProps) => {

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const lineChartData: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        fill:true,
        label,
        data,
        backgroundColor, // Corrected property name
        borderColor, // Corrected property name
      },
    ],
  };

  return <Line options={options} data={lineChartData} />;
}
