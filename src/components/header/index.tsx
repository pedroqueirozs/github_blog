import { HeaderContainer } from './styles'
import ImgBackgroundHeader from '../../assets/background_img_header.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={ImgBackgroundHeader} alt="" />
    </HeaderContainer>
  )
}
