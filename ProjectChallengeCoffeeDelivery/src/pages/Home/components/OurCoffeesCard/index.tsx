import { OurCoffeesCardContainer, Tags } from './styles'
import cafeExpresso from '../../../../assets/Coffee.svg'

export function OurCoffeesCard() {
  return (
    <OurCoffeesCardContainer>
      <img src={cafeExpresso} alt="" />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>
    </OurCoffeesCardContainer>
  )
}
