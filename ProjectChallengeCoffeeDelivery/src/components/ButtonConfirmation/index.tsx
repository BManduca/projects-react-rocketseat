import { ButtonHTMLAttributes } from 'react'
import { ButtonConfirmationContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number
}

export function ButtonConfirmation({ text, ...props }: ButtonProps) {
  return (
    <ButtonConfirmationContainer {...props}>{text}</ButtonConfirmationContainer>
  )
}
