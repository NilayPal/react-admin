import { FaRegBell } from "react-icons/fa";
import Adminsidebar from "../Components/adminsidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import userImg from "../assets/userpic.png";
import data from "../assets/data.json";
import  {BiMaleFemale}from "react-icons/bi"
import { BarChart, DoughnutChart } from "../Components/charts";
import Table from "../Components/dashboardtable";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <Adminsidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="search for data,users,docs" />
          <FaRegBell />
          <img src={userImg} alt="user" />
        </div>

        <section className="widgetcontainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={3400000000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            amount={false}
            value={400}
            heading="User"
            color="rgb(0,198,202)"
          />

          <WidgetItem
            percent={80}
            amount={false}
            value={23000}
            heading="Transaction"
            color="rgb(255 196 0)"
          />
          <WidgetItem
            percent={30}
            amount={false}
            value={1000}
            heading="Products"
            color="rgb(76 0 255)"
          />
        </section>

        <section className="graph">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* // For the graph    */}
            <BarChart
              data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgcolor_1="rgb(0,115,255)"
              bgcolor_2="rgba(53,162,235,0.8)"
              // labels={[]}
              // horizantal={true}
            />
          </div>

          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <Categoryitem
                  key={i.heading}
                  value={i.value}
                  color={i.color} //  "hsl(169,100%,50%)"
                  heading={i.heading}
                />
              ))}
            </div>
          </div>
        </section>

      <section className="transaction-container">
        <div className="gander-chart">
          <h2>Gender Ratio</h2>
          {/* chart */}
           <DoughnutChart labels={["Female","Male"]} data={[12,19]}
           backgroundColor={["hsl(340,82%,56%)","rgba(53,162,235,0.8)"]}
          // cutout={90}
           />     

          <p><BiMaleFemale/></p>
        </div>
           <Table data={data.transaction}/>     

        {/* table */}

      </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="Widget">
    <div className="widgetinfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp />+{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>
    <div
      className="circle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255,255,255)0
      )`,
      }}
    >
      <span color={color}>{percent}%</span>
    </div>
  </article>
);

interface CategoryitemProps {
  color: string;
  value: number;
  heading: string;
}

const Categoryitem = ({ color, value, heading }: CategoryitemProps) => (
  <div className="categoryitem">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
