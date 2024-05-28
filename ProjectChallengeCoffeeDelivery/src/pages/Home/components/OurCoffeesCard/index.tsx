import {
  CardFooter,
  DescriptionCoffee,
  NameCoffee,
  OurCoffeesCardContainer,
  Tags,
  AddCartWrapper,
} from './styles'
import cafeExpresso from '../../../../assets/Coffee.svg'
import { RegularText, TitleText } from '../../../../components/Typography'
import { QuantityInput } from '../../../../components/QuantityInput'
import { ShoppingCart } from 'phosphor-react'

export function OurCoffeesCard() {
  return (
    <OurCoffeesCardContainer>
      <img src={cafeExpresso} alt="" />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>
      <NameCoffee>Expresso Tradicional</NameCoffee>
      <DescriptionCoffee>
        O tradicional café feito com água quente e grãos moídos
      </DescriptionCoffee>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </OurCoffeesCardContainer>
  )
}
