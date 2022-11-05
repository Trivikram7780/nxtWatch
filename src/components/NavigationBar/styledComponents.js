import styled from 'styled-components'

export const NavigationContainer = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  width: 12vw;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 92vh;
  color: ${props => (props.dark ? '#f9f9f9' : '#313131')};
`

export const HeadingButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  border: 0px;
  color: ${props => (props.dark ? '#f9f9f9' : '#313131')};
  width: 100%;
  background-color: ${props =>
    props.path === '/' && props.dark ? '#424242' : null};
  background-color: ${props =>
    props.path === '/' && !props.dark ? '#e2e8f0' : null};
  border-radius: 10px;
  cursor: pointer;
`
export const TrendingButton = styled(HeadingButton)`
  background-color: transparent;
  background-color: ${props =>
    props.path === '/trending' && props.dark ? '#424242' : null};
  background-color: ${props =>
    props.path === '/trending' && !props.dark ? '#e2e8f0' : null};
`
export const GamingButton = styled(HeadingButton)`
  background-color: transparent;
  background-color: ${props =>
    props.path === '/gaming' && props.dark ? '#424242' : null};
  background-color: ${props =>
    props.path === '/gaming' && !props.dark ? '#e2e8f0' : null};
`
export const SavedVideos = styled(HeadingButton)`
  background-color: transparent;
  background-color: ${props =>
    props.path === '/saved-videos' && props.dark ? '#424242' : null};
  background-color: ${props =>
    props.path === '/saved-videos' && !props.dark ? '#e2e8f0' : null};
`
export const NavFooter = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.dark ? '#f9f9f9' : '#313131')};
`
