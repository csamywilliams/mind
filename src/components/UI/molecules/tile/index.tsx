import { IoMdAddCircleOutline } from "react-icons/io";

import TileProps from "../../../interfaces/tile-props"

import IconButton from "../../atoms/icon-button"
import Icon from "../../atoms/icon"

import { TileStyled, TileContentStyled, IconStyled } from "./tile.styled"

const Tile = ({ name, icon, page, styledAs }: TileProps) => {

  return (
    <TileStyled>
        <IconStyled>
          <div className={`icon icon--${styledAs}`}>
            <Icon icon={icon} styledAs={styledAs} iconSize={"4rem"} />
          </div>
        </IconStyled>
        <TileContentStyled>
           <p>{name}</p>
          <IconButton icon={IoMdAddCircleOutline} iconSize="2rem" styledAs="normal" />
        </TileContentStyled>
    </TileStyled>
  )
}

export default Tile
