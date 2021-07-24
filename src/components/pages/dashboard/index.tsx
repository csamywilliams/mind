import {Fragment} from "react"

import DashboardLayout from "../../templates/dashboard-layout";
import tiles from "../../../js/tiles";
import profileImg from "../../../assets/profile.jpg";


const Dashboard = () => <Fragment>
  <section>
    <DashboardLayout tiles={tiles} name={"Amy"} profileImg={profileImg} />
  </section>
</Fragment>

export default Dashboard;
