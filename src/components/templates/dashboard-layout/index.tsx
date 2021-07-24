import { Fragment } from "react"
import TileRow from "../../UI/organisms/tile-row"
import Banner from "../../UI/organisms/banner"
import Aside from "../../UI/organisms/aside"
import TileProps from "../../interfaces/tile-props"

import { DashboardStyled, MainStyled, ContentStyled } from "./dashboard-layout.styled"


type DashboardProps = {
	tiles: Array<TileProps>
	name: string
	profileImg?: string
}

const DashboardLayout = ({ tiles, name, profileImg }: DashboardProps) => 
	<Fragment>
		<DashboardStyled>
			<Banner />
			<ContentStyled>
				<Aside name={name} profileImg={profileImg}/>
				<MainStyled>
					<TileRow tiles={tiles} />
				</MainStyled>
			</ContentStyled>
		</DashboardStyled>
	</Fragment>


export default DashboardLayout;
