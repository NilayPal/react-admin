import Adminsidebar from "../../Components/adminsidebar"
import { LineChart } from "../../Components/charts";

const months = ["January", "February", "March", "April", "May", "June", "July",
                 "Aug","Sept","Oct","Nov","Dec"];


const LineCharts = () => {
  return (
    <div className="adminContainer">
    <Adminsidebar />
    <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
            <LineChart
            data={[200,444,343,556,778,455,990,300,144,433,655,237,755,190]}
    
            label="Users"
            backgroundColor="rgb(53, 162, 255,0.5)"
            borderColor="rgb(53,162,255)"
           labels={months}
            />
            <h2>Active Users</h2>
        </section>


        <section>
            <LineChart
            data={[24000,44450,34300,55600,77809,45507,99005,30002,14400,43300,65500,23700]}
    
            label="Revenue"
            backgroundColor={"hsla(129, 80%, 40%,0.4)"}
            borderColor={"hsl(129,80%,40%)"}
           labels={months}
            />
            <h2>Total Products (SKU)</h2>
        </section>


        <section>
            <LineChart
            data={[9000,12000,12000,9000,1000,5000,4000,1200,1100,1500,2000,5000]}
    
            label="Discount"
            backgroundColor={"hsla(29, 80%, 40%,0.4)"}
            borderColor={"hsl(29,80%,40%)"}
           labels={months}
            />
            <h2>Discount Allotted</h2>
        </section>
        </main>
    </div>
  )
}

export default LineCharts;
