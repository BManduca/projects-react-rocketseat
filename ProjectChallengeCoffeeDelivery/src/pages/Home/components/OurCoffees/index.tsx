import { TitleText } from '../../../../components/Typography'
import { OurCoffeesCard } from '../OurCoffeesCard'
import { OurCoffeeList, OurCoffeesContainer } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <OurCoffeeList>
        <OurCoffeesCard />
        <OurCoffeesCard />
        <OurCoffeesCard />
        <OurCoffeesCard />
        <OurCoffeesCard />
      </OurCoffeeList>
    </OurCoffeesContainer>
  )
}
