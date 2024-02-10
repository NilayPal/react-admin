import Adminsidebar from "../../Components/adminsidebar"
import { DoughnutChart, PieChart } from "../../Components/charts"
import{categories} from "../../assets/data.json"




const PieCharts = () => {
  return (
    <div className="adminContainer">
    <Adminsidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>
        <section>
           <div>
            <PieChart labels={["Processing","Shiped","Delivered"]}
            data={[12,9,13]}
            backgroundColor={[
              `hsl(110,80%,80%)`,
              `hsl(110,80%,50%)`,
              `hsl(110,40%,50%)`,
            ]}
            offset={[0, 0, 50]}
            />

           </div>
           <h2>Order  Fulfillment Ratio</h2>
        </section>


        <section>
           <div>
            <DoughnutChart
            labels={categories.map(i=>i.heading)}
            data={categories.map(i=>i.value)}
            backgroundColor={
             categories.map((i)=>`hsl(${i.value*4},${i.value}%,50%)`)
            }
          //  offset={[50, 50, 50, 50]}
            />

           </div>
           <h2>PRODUCT CATEGORIES Ratio</h2>
        </section>

        
        <section>
           <div>
            <DoughnutChart
            labels={["In Stock","Out of Stock"]}
            data={[40,20]}
            backgroundColor={
            [`hsl(269,80%,40%)`,
            "rgb(53,162,255)",]
            }
          //  offset={[50, 50, 50, 50]}
         // cutout={"70%"}
            />

           </div>
           <h2>STOCK AVAILABILITY</h2>
        </section>


        <section>
           <div>
            <DoughnutChart
            labels={["Marketing Cost","Discount","Burnt","Production Cost","Net Margin"]}
            data={[40,20,5,20,25]}
            backgroundColor={
            [`hsl(110,80%,40%)`,
            `hsl(19,80%,40%)` ,
            `hsl(69,80%,40%)`,
            `hsl(300,80%,40%)`,
            `rgb(53,162,255)`]
            }
          //  offset={[50, 50, 50, 50]}
         // cutout={"70%"}
            />
           </div>
           <h2>REVENUE DISTRIBUTION</h2>
        </section>


        <section>
           <div>
            <DoughnutChart
            labels={["Admin","Customers"]}
            data={[40,250]}
            backgroundColor={
            [`hsl(110,80%,40%)`,
            `hsl(19,80%,40%)` ,
           ]
            }
           offset={[0,80]}
         // cutout={"70%"}
            />
           </div>
           <h2>USER & ADMIN</h2>
        </section>
      </main>
    </div>
  )
}

export default PieCharts;
