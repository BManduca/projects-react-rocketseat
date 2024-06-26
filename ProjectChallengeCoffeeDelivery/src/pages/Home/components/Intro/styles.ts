import { styled } from 'styled-components'
import introBackgroundImage from '../../../../assets/intro-background.png'
import { rgba } from 'polished'
import { TitleText } from '../../../../components/Typography'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackgroundImage}) no-repeat center,
        /* 
            esse linear ele vai dar cor branca até a cor definida como base-background, 
            com uma opacidade baixa entre as duas
        */
        linear-gradient(
            0deg,
            ${theme.colors['base-white']} 0%,
            ${rgba(theme.colors['base-background'], 0.2)} 50%,
            ${theme.colors['base-background']} 100%
        )
  `};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
