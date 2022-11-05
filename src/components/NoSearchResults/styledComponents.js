import styled from 'styled-components'

export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
