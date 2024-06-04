import { styled } from 'styled-components'

export const ButtonCleanContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme.colors['base-white']};
  font-weight: 700;
  background: ${({ theme }) => theme.colors['brand-red']};
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  border: none;
  border-radius: 0.375rem;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;
  margin-top: 0.7rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled) {
    background: ${({ theme }) => theme.colors['brand-red']};
  }
`
