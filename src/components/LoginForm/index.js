import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginBackgroundContainer,
  LoginFormContainer,
  LoginImage,
  LabelInput,
  InputContainer,
  UserInput,
  LabelInputCheckBox,
} from './styledComponents'
import './index.css'

class LoginForm extends Component {
  state = {
    isPasswordShown: false,
    username: '',
    password: '',
    isFailed: '',
    failedMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onPasswordChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({
        isPasswordShown: true,
      })
    } else {
      this.setState({
        isPasswordShown: false,
      })
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })

    history.push('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      isFailed: true,
      failedMsg: errorMsg,
    })
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {
            isPasswordShown,
            username,
            password,
            isFailed,
            failedMsg,
          } = this.state
          const imageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginBackgroundContainer dark={isDarkTheme}>
              <LoginFormContainer
                as="form"
                dark={isDarkTheme}
                onSubmit={this.onLogin}
              >
                <LoginImage src={imageUrl} />
                <LabelInput dark={isDarkTheme} htmlFor="username">
                  USERNAME
                </LabelInput>
                <InputContainer dark={isDarkTheme}>
                  <UserInput
                    id="username"
                    type="text"
                    dark={isDarkTheme}
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>
                <LabelInput dark={isDarkTheme} htmlFor="username">
                  PASSWORD
                </LabelInput>
                {!isPasswordShown && (
                  <InputContainer dark={isDarkTheme}>
                    <UserInput
                      id="username"
                      type="password"
                      dark={isDarkTheme}
                      placeholder="Password"
                      value={password}
                      onChange={this.onPasswordChange}
                    />
                  </InputContainer>
                )}
                {isPasswordShown && (
                  <InputContainer dark={isDarkTheme}>
                    <UserInput
                      id="username"
                      type="text"
                      dark={isDarkTheme}
                      placeholder="Password"
                      value={password}
                      onChange={this.onPasswordChange}
                    />
                  </InputContainer>
                )}
                <div className="check-box-container">
                  <input
                    type="checkbox"
                    id="showPassword"
                    onChange={this.showPassword}
                  />
                  <LabelInputCheckBox dark={isDarkTheme} htmlFor="showPassword">
                    Show Password
                  </LabelInputCheckBox>
                </div>
                <button className="login-btn" type="submit">
                  Login
                </button>
                {isFailed && <p className="error-msg">*{failedMsg}</p>}
              </LoginFormContainer>
            </LoginBackgroundContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
