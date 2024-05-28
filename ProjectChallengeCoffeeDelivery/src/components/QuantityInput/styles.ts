import { styled } from 'styled-components'

export const QuantityInputContainer = styled.div`
  flex: 1;
  background: ${(props) => props.theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 0.375rem;

  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors['base-title']};

    &:focus {
      outline: none;
    }
  }
`

export const IconWrapper = styled.button.attrs({
  /*
    futuramente será utilizado em outros locais, por isso,
    a definição de button
    e não como reset ou submit
  */
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors['brand-purple']};
  transition: 0.4s;

  &:disabled {
    opcacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.colors['brand-purple-dark']};
  }
`
