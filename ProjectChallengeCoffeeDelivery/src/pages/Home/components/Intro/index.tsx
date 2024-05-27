import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles'
import introImageCoffee from '../../../../assets/intro-coffee-image.png'
import { RegularText } from '../../../../components/Typography'
import { InfoWithoutIcon } from '../../../../components/InfoWithoutIcon'
import { ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithoutIcon
              iconBG={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <p>Beneficio</p>
            <p>Beneficio</p>
            <p>Beneficio</p>
          </BenefitsContainer>
        </div>
        <img src={introImageCoffee} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
