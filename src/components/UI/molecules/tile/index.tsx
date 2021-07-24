import TileProps from "../../../interfaces/tile-props"

import Button from "../../atoms/button"
import Icon from "../../atoms/icon"

import { TileStyled } from "./tile.styled"

const Tile = ({ name, icon, page, styledAs }: TileProps) => {

  return (
    <TileStyled>
      <div className={`tile tile--${styledAs}`}>
        <Icon icon={icon} styledAs={styledAs} />
        <p>{name}</p>
        <Button title="Add" />
      </div>
    </TileStyled>
  )
}

export default Tile
