import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  background: ${({ theme }) => theme.colors['base-background']};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem; //espaçar os itens dentro do container
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 0.4375rem 2.3125rem 0.4375rem 2.3125rem;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
