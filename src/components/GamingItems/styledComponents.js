import styled from 'styled-components'

export const GamingVideos = styled.li`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin-top: 25px;
  color: ${props => (props.dark ? '#ebebeb' : '#424242')};
`
export const SpanTag = styled.span`
  padding-left: 29px;
  font-size: small;
  color: ${props => (props.dark ? '#cccccc' : '#424242')};
`
