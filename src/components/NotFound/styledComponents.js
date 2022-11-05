import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.dark ? '#000000' : '#ebebeb')};
  color: ${props => (props.dark ? '#ebebeb' : '#313131')};
`
