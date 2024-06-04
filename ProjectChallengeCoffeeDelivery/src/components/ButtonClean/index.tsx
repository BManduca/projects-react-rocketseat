import { ButtonHTMLAttributes } from 'react'
import { ButtonCleanContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function ButtonClean({ text, ...props }: ButtonProps) {
  return <ButtonCleanContainer {...props}>{text}</ButtonCleanContainer>
}
