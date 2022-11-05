import ThemeContext from '../../context/ThemeContext'
import {NoSearchResultContainer} from './styledComponents'
import './index.css'

const NoSearchResult = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {noVideoRetry} = props

      const retry = () => {
        noVideoRetry()
      }

      return (
        <NoSearchResultContainer dark={isDarkTheme}>
          {isDarkTheme && (
            <>
              <img
                className="no-search"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <h1>No Search results found</h1>
              <p className="no-video-para">
                Try different Key words or remove search filter
              </p>
              <button className="retry-btn-no" type="button" onClick={retry}>
                Retry
              </button>
            </>
          )}
        </NoSearchResultContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default NoSearchResult
