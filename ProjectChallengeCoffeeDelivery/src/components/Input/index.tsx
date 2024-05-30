import { InputHTMLAttributes } from 'react'
import { InputStyleContainer } from './styles'

// tipagem TS
type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return <InputStyleContainer {...props} />
}
