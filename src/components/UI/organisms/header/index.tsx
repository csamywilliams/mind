import {Title} from "./header.styled"

type HeaderProps = {
  title: string
}

export const Header = ({ title }: HeaderProps) => <header>
  <Title>{ title }</Title>
</header>
