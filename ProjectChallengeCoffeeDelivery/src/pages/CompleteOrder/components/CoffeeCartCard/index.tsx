import {
  ActionsContainer,
  ButtonRemove,
  CoffeeCartCardContainer,
} from './styles'
import { RegularText } from '../../../../components/Typography'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Trash } from 'phosphor-react'
import { CartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" quantity={coffee.quantity} />
            <ButtonRemove>
              <Trash size={16} />
              Remover
            </ButtonRemove>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
