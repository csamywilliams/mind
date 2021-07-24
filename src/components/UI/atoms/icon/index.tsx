
import { IconStyled } from "./icon.styled"
import { IconContext } from "react-icons";

type IconProps = {
    styledAs: string,
	icon: React.ComponentType;
}

const Icon = ({ icon, styledAs }: IconProps) => {

  const IconComponent = icon;

    return (
        <IconStyled>
            <IconContext.Provider value={{ size: "2rem"}}>
                <IconComponent />
            </IconContext.Provider>
        </IconStyled>
    )
}

export default Icon
