import Adminsidebar from "../../Components/adminsidebar"
import { BarChart } from "../../Components/charts"


const months = ["January", "February", "March", "April", "May", "June", "July",
                 "Aug","Sept","Oct","Nov","Dec"];


const BarCharts = () => {
  return (
    <div className="adminContainer">
    <Adminsidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
            <BarChart
            data_1={[200,444,343,556,778,455,990]}
            data_2={[300,144,433,655,237,755,190]}
            title_1="Products"
            title_2="Users"
            bgcolor_1={`hsl(260,50%,30%)`}
            bgcolor_2={`hsl(360,90%,90%)`}
            />
            <h2>TOP SEELING PRODUCTS & TOP CUSTOMER</h2>
        </section>
        <section>
            <BarChart
            horizantal={true}
            data_1={[200,444,343,556,778,455,990,300,144,433,655,237]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgcolor_1={`hsl(260,50%,30%)`}
            bgcolor_2={``}
            labels={months}
            />
            <h2>Orders Through Out The Years</h2>
        </section>
      </main>
    </div>
  )
}

export default BarCharts
