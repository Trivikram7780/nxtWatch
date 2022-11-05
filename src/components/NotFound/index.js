import ThemeContext from '../../context/ThemeContext'
import Headers from '../Header'
import NavigationBar from '../NavigationBar'
import './index.css'
import {NotFoundContainer} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const lightImageUrl =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const darkImageUrl =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Headers />
          <div className="not-found-route">
            <NavigationBar />
            <NotFoundContainer dark={isDarkTheme}>
              {!isDarkTheme && (
                <img
                  className="not-found-img"
                  src={lightImageUrl}
                  alt="not found"
                />
              )}
              {isDarkTheme && (
                <img
                  className="not-found-img"
                  src={darkImageUrl}
                  alt="not found"
                />
              )}
              <h1>Page Not Found</h1>
              <p>We are sorry the page you requested could not be found</p>
            </NotFoundContainer>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
