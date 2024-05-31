import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import ConfirmedOrderIllustration from '../../assets/confirmed_order.svg'
import { InfoWithoutIcon } from '../../components/InfoWithoutIcon'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function OrderConfirmedPage() {
  const { colors } = useTheme()

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhuul! Pedido Confirmado!</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
      <section>
        <OrderDetailsContainer>
          <InfoWithoutIcon
            icon={<MapPin weight="fill" />}
            iconBG={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS.
              </RegularText>
            }
          />
          <InfoWithoutIcon
            icon={<Clock weight="fill" />}
            iconBG={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithoutIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBG={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img
          src={ConfirmedOrderIllustration}
          alt="Imagem da confirmação e aguardo da entrega do pedido"
        />
      </section>
    </OrderConfirmedContainer>
  )
}
