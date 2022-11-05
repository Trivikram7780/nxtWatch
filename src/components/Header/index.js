import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {HiMoon, HiSun} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import {
  HeaderContainer,
  LogoutButton,
  PopupContainer,
  CloseButton,
  PopupLogoutButton,
} from './styledComponents'
import './index.css'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.push('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const imageLogoUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const changeTheme = () => {
          toggleTheme()
        }

        return (
          <HeaderContainer dark={isDarkTheme}>
            <Link to="/">
              <img className="logo-header-img" src={imageLogoUrl} alt="logo" />
            </Link>
            <div className="right-header">
              {isDarkTheme && (
                <button
                  className="theme-btn"
                  type="button"
                  onClick={changeTheme}
                  data-testid="theme"
                >
                  <HiSun className="light-icon" />
                </button>
              )}
              {!isDarkTheme && (
                <button
                  className="theme-btn"
                  type="button"
                  onClick={changeTheme}
                  data-testid="theme"
                >
                  <HiMoon className="dark-icon" />
                </button>
              )}
              <div>
                <img
                  className="profile-img"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </div>
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" dark={isDarkTheme}>
                    Logout
                  </LogoutButton>
                }
                className="popup-content"
              >
                {close => (
                  <PopupContainer dark={isDarkTheme}>
                    <div>
                      <p className="popup-para">Are you sure to Logout ?</p>
                    </div>
                    <div className="popup-button">
                      <CloseButton
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                        dark={isDarkTheme}
                      >
                        Cancel
                      </CloseButton>
                      <PopupLogoutButton dark={isDarkTheme} onClick={onLogout}>
                        Confirm
                      </PopupLogoutButton>
                    </div>
                  </PopupContainer>
                )}
              </Popup>
            </div>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
