import { IconButtonStyled } from "./icon-button.styled"

import Icon from "../icon";

type IconButtonProps = {
    icon: React.ComponentType;
    styledAs: string;
    iconSize: string;
}

const IconButton = ({ icon, styledAs, iconSize}: IconButtonProps) => <IconButtonStyled>
  <Icon icon={icon} styledAs={styledAs} iconSize={iconSize} />
</IconButtonStyled>

export default IconButton
