import { styled } from 'styled-components'
import introBackgroundImage from '../../../../assets/intro-background.png'
import { rgba } from 'polished'
import { TitleText } from '../../../../components/Typography'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${(props) => `url(${introBackgroundImage}) no-repeat center,
        /* 
            esse linear ele vai dar cor branca até a cor definida como base-background, 
            com uma opacidade baixa entre as duas
        */
        linear-gradient(
            0deg,
            ${props.theme.colors['base-white']} 0%,
            ${rgba(props.theme.colors['base-background'], 0.2)} 50%,
            ${props.theme.colors['base-background']} 100%
        )
  `};
  background-size: cover;
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
