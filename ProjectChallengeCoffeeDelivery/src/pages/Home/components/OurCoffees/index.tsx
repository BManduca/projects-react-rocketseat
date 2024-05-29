import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import { OurCoffeesCard } from '../OurCoffeesCard'
import { OurCoffeeList, OurCoffeesContainer } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <OurCoffeeList>
        {coffees.map((coffee) => (
          <OurCoffeesCard key={coffee.id} coffee={coffee} />
        ))}
      </OurCoffeeList>
    </OurCoffeesContainer>
  )
}
