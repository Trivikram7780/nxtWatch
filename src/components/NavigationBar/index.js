import {withRouter, Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {IoGameController} from 'react-icons/io5'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import {
  NavigationContainer,
  HeadingButton,
  TrendingButton,
  GamingButton,
  SavedVideos,
  NavFooter,
} from './styledComponents'
import './index.css'

const NavigationBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {match} = props
      const {path} = match

      return (
        <NavigationContainer dark={isDarkTheme}>
          <div className="buttons-container">
            <Link to="/" className="link">
              <HeadingButton dark={isDarkTheme} path={path}>
                {path === '/' && <AiFillHome className="selected-icon" />}
                {path !== '/' && <AiFillHome className="icon" />}
                <p className="nav-head">Home</p>
              </HeadingButton>
            </Link>
            <Link to="/trending" className="link">
              <TrendingButton dark={isDarkTheme} path={path}>
                {path === '/trending' && (
                  <AiFillFire className="selected-icon" />
                )}
                {path !== '/trending' && <AiFillFire className="icon" />}
                <p className="nav-head">Trending</p>
              </TrendingButton>
            </Link>
            <Link to="/gaming" className="link">
              <GamingButton dark={isDarkTheme} path={path}>
                {path === '/gaming' && (
                  <IoGameController className="selected-icon" />
                )}
                {path !== '/gaming' && <IoGameController className="icon" />}
                <p className="nav-head">Gaming</p>
              </GamingButton>
            </Link>
            <Link to="/saved-videos" className="link">
              <SavedVideos dark={isDarkTheme} path={path}>
                {path === '/saved-videos' && (
                  <BiListPlus className="selected-icon" />
                )}
                {path !== '/saved-videos' && <BiListPlus className="icon" />}
                <p className="nav-head">Saved Videos</p>
              </SavedVideos>
            </Link>
          </div>
          <NavFooter dark={isDarkTheme}>
            <p className="contact-us">CONTACT US</p>
            <div className="media-container">
              <img
                className="media-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <img
                className="media-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <img
                className="media-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </div>
            <p className="footer-msg">
              Enjoy! Now to see your channel and recommendation!
            </p>
          </NavFooter>
        </NavigationContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(NavigationBar)
