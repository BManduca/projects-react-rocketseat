import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeLogoImage from '../../assets/LogoCoffee.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogoImage} alt="Logo do Coffee Delivery" />

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
