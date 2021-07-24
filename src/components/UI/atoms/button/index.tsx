import { ButtonStyled } from "./button.styled"

type ButtonProps = {
  title: string
}

const Button = ({ title }: ButtonProps) => <ButtonStyled>
  { title }
</ButtonStyled>

export default Button
