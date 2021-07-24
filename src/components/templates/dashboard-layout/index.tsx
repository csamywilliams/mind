import { Fragment } from "react"
import TileRow from "../../UI/organisms/tile-row"
import TileProps from "../../interfaces/tile-props"

import { DashboardStyled } from "./dashboard-layout.styled"


type DashboardProps = {
  tiles: Array<TileProps>
}

const DashboardLayout = ({ tiles }: DashboardProps) => 
  <Fragment>
      <DashboardStyled>
        <TileRow tiles={tiles} />
      </DashboardStyled>
  </Fragment>


export default DashboardLayout;
