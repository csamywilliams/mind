import {Fragment} from "react"

import DashboardLayout from "../../templates/dashboard-layout";
import tiles from "../../../js/tiles";


const Dashboard = () => <Fragment>
  <section>
    <DashboardLayout tiles={tiles}/>
  </section>
</Fragment>

export default Dashboard;
