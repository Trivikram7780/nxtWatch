import styled from 'styled-components'

export const GamingBackgroundContainer = styled.div`
  background-color: ${props => (props.dark ? '#000000' : '#ebebeb')};
  overflow: auto;
  height: 92vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  width: 100%;
`
export const GamingHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Gill Sans;
  height: 10vh;
  align-items: center;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#cbd5e1')};
  color: ${props => (props.dark ? '#f1f5f9' : '#313131')};
`
export const BackgroundGamingLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  background-color: ${props => (props.dark ? '#212121' : '#f9f9f9')};
  color: #ff0000;
  margin-left: 50px;
  border-radius: 50%;
  margin-right: 15px;
`
