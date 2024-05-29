import {
  CardFooter,
  DescriptionCoffee,
  NameCoffee,
  OurCoffeesCardContainer,
  Tags,
  AddCartWrapper,
} from './styles'
import { RegularText, TitleText } from '../../../../components/Typography'
import { QuantityInput } from '../../../../components/QuantityInput'
import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatMoney'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface OurCoffeesProps {
  coffee: Coffee
}

export function OurCoffeesCard({ coffee }: OurCoffeesProps) {
  const formattedPrice = formatMoney(coffee.price)

  return (
    <OurCoffeesCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <NameCoffee>{coffee.name}</NameCoffee>
      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
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
