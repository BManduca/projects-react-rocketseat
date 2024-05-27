import { styled } from 'styled-components'

export const InfoWithoutIconContainer = styled.div`
  display: flex;
  align-icons: center;
  gap: 0.75rem;
`

interface IconContainerProps {
  IconBG: string
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ IconBG }) => IconBG};
  color: ${(props) => props.theme.colors['base-white']};

  display: flex;
  align-items: center;
  justify-content: center;
`
