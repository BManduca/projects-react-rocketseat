import { InputHTMLAttributes, forwardRef } from 'react'
import { InputStyleContainer } from './styles'

// tipagem TS
type InputProps = InputHTMLAttributes<HTMLInputElement>

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <InputStyleContainer {...props} ref={ref} />
})
