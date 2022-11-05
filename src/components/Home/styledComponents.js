import styled from 'styled-components'

export const VideoBackgroundContainer = styled.div`
  background-color: ${props => (props.dark ? '#000000' : '#ebebeb')};
  overflow: auto;
  height: 92vh;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25vw;
  margin-bottom: 25px;
`
export const InputElement = styled.input`
  width: 100%;
  color: ${props => (props.dark ? '#d7dfe9' : '#000000')};
  background-color: transparent;
  outline: none;
  border: 0px;
`
export const SearchBackground = styled.div`
  border: 1px solid;
  border-color: ${props => (props.dark ? '#616e7c' : '#cccccc')};
  background-color: #f1f5f9;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`
export const InputElementContainer = styled.div`
  width: 25vw;
  padding-left: 10px;
  border: 1px solid;
  border-color: ${props => (props.dark ? '#616e7c' : '#313131')};
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
`
