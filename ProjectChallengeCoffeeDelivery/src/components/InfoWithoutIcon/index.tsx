import { ReactNode } from 'react'
import { IconContainer, InfoWithoutIconContainer } from './styles'

interface InfoWithoutIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBG: string
}

export function InfoWithoutIcon({ icon, text, iconBG }: InfoWithoutIconProps) {
  return (
    <InfoWithoutIconContainer>
      <IconContainer IconBG={iconBG}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithoutIconContainer>
  )
}
