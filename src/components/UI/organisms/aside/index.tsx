import {Title} from "./aside.styled"

type AsideProps = {
  title: string
}

export const Aside = ({ title }: AsideProps) => <aside>
  <Title>{ title }</Title>
</aside>
