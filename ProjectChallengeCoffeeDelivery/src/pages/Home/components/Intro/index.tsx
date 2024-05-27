import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles'
import introImageCoffee from '../../../../assets/intro-coffee-image.png'
import { RegularText } from '../../../../components/Typography'
import { InfoWithoutIcon } from '../../../../components/InfoWithoutIcon'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
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
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconBG={colors['brand-yellow-dark']}
            />
            <InfoWithoutIcon
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              iconBG={colors['base-text']}
            />
            <InfoWithoutIcon
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
              iconBG={colors['brand-yellow']}
            />
            <InfoWithoutIcon
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
              iconBG={colors['brand-purple']}
            />
          </BenefitsContainer>
        </div>
        <img src={introImageCoffee} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
