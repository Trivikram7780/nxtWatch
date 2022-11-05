import styled from 'styled-components'

export const LoginBackgroundContainer = styled.div`
  background-color: ${props => (props.dark ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const LoginFormContainer = styled.div`
  padding-top: 15px;
  padding-right: 45px;
  padding-left: 45px;
  padding-bottom: 35px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${props => (props.dark ? '#231f20' : '#ffffff')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 15px;
`
export const LoginImage = styled.img`
  padding-top: 25px;
  height: 100px;
  align-self: center;
`
export const LabelInput = styled.label`
  color: ${props => (props.dark ? '#ebebeb' : '#7e858e')};
  font-weight: 400;
  margin-top: 25px;
  font-weight: 500;
  font-size: small;
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${props => (props.dark ? '#f4f4f4' : '#7e858e')};
  padding: 8px;
  border-radius: 5px;
  margin-top: 4px;
`
export const UserInput = styled.input`
  width: 100%;
  border: 0px;
  outline: none;
  background-color: transparent;
  color: ${props => (props.dark ? '#f1f1f1' : '#7e858e')};
`
export const LabelInputCheckBox = styled(LabelInput)`
  margin-top: 0px;
  margin-bottom: 1px;
`
