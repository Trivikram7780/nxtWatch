import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  background-color: ${props => (props.dark ? '#000000' : '#ebebeb')};
  overflow: auto;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px;
  padding-bottom: 10px;
  width: 100%;
  padding-right: 25px;
  color: ${props => (props.dark ? '#ebebeb' : '#313131')};
`
export const LikeViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${props => (props.dark ? '#cccccc' : '#424242')};
`
export const UserActions = styled.div`
  display: flex;
  color: ${props => (props.dark ? '#cccccc' : '#424242')};
`
export const LikeDislikeButton = styled.button`
  color: ${props => (props.dark ? '#ebebeb' : '#424242')};
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  font-size: large;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${props => (props.iconColor ? '#4f46e5' : null)};
`
