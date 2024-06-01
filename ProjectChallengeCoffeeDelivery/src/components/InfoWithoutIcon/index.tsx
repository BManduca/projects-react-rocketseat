import { ReactNode } from 'react'
import { IconContainer, InfoWithoutIconContainer } from './styles'

interface InfoWithoutIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function InfoWithoutIcon({ icon, text, iconBg }: InfoWithoutIconProps) {
  return (
    <InfoWithoutIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithoutIconContainer>
  )
}
