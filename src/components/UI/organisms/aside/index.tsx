import { AsideStyled, NameStyled, ProfileImage } from "./aside.styled"

type AsideProps = {
  name: string
  profileImg?: string
}

const Aside = ({ name, profileImg }: AsideProps) => <AsideStyled>
  <ProfileImage>
    <img src={profileImg} alt="profile" width="200" height="200"/>
  </ProfileImage>
  <div>Hello <NameStyled>{name}</NameStyled></div>
</AsideStyled>

export default Aside;