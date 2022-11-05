import ThemeContext from '../../context/ThemeContext'
import {FailedView} from './styledComponents'
import './index.css'

const PageNotFound = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkFailedView =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      const lightFailedView =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      const {onRetry} = props

      const onClickRetry = () => {
        onRetry()
      }

      return (
        <FailedView dark={isDarkTheme}>
          {isDarkTheme && (
            <img className="failed-img" src={darkFailedView} alt="Not Found" />
          )}
          {!isDarkTheme && (
            <img className="failed-img" src={lightFailedView} alt="Not Found" />
          )}
          <h1>Oops! Something Went Wrong</h1>
          <p className="failed-msg">
            We have some Trouble to complete your request
          </p>
          <p>Please try again!</p>
          <button className="retry-btn" type="button" onClick={onClickRetry}>
            Retry
          </button>
        </FailedView>
      )
    }}
  </ThemeContext.Consumer>
)

export default PageNotFound
