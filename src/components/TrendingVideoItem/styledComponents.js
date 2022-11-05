import styled from 'styled-components'

export const VideoListItem = styled.li`
  display: flex;
  flex-direction: row;
  color: ${props => (props.dark ? '#cccccc' : '#181818')};
  padding-top: 25px;
  margin-left: 30px;
`
