import Tile from "../../molecules/tile";
import TileProps from "../../../interfaces/tile-props"

import { TileRowStyled } from "./tile-row.styled"

type TileRowProps = {
  tiles: Array<TileProps>
}

const TileRow = ({ tiles }: TileRowProps) => 
  <TileRowStyled>
    {tiles.map(({name, icon, page, styledAs}) => <Tile key={name} name={name} icon={icon} page={page} styledAs={styledAs} />)}
  </TileRowStyled>

export default TileRow;
