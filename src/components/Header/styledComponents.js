import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  opacity: 1;
`
export const LogoutButton = styled.button`
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  border: 2px solid;
  border-color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  padding-right: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: transparent;
  padding-left: 25px;
  border-radius: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: medium;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#313131' : '#f9f9f9')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  padding: 30px;
  width: 20vw;
  border-radius: 25px;
`
export const CloseButton = styled(LogoutButton)`
  font-weight: normal;
  border: 1px solid;
  padding-left: 15px;
  padding-right: 15px;
`
export const PopupLogoutButton = styled(CloseButton)`
  border: 0px;
  background-color: #3b82f6;
  color: white;
  margin-left: 25px;
`
