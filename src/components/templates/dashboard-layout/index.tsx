import { Fragment } from "react"
import TileRow from "../../UI/organisms/tile-row"
import Banner from "../../UI/organisms/banner"
import TileProps from "../../interfaces/tile-props"

import { DashboardStyled, MainStyled } from "./dashboard-layout.styled"


type DashboardProps = {
  tiles: Array<TileProps>
}

const DashboardLayout = ({ tiles }: DashboardProps) => 
	<Fragment>
		<DashboardStyled>
		<Banner />
			<MainStyled>
				<TileRow tiles={tiles} />
			</MainStyled>
		</DashboardStyled>
	</Fragment>


export default DashboardLayout;
