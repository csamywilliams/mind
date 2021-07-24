
import { IconStyled } from "./icon.styled"
import { IconContext } from "react-icons";

type IconProps = {
    styledAs: string,
    icon: React.ComponentType;
    iconSize: string
}

const Icon = ({ icon, styledAs, iconSize }: IconProps) => {

  const IconComponent = icon;

    return (
        <IconStyled>
            <IconContext.Provider value={{ size: iconSize}}>
                <IconComponent />
            </IconContext.Provider>
        </IconStyled>
    )
}

export default Icon
