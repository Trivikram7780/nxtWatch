import {Component} from 'react'
import {IoGameController} from 'react-icons/io5'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Headers from '../Header'
import NavigationBar from '../NavigationBar'
import PageNotFound from '../PageNotFound'
import GamingItems from '../GamingItems'
import {
  GamingBackgroundContainer,
  GamingHeader,
  BackgroundGamingLogo,
} from './styledComponents'
import './index.css'

class Gaming extends Component {
  state = {
    gamingList: [],
    isLoading: true,
    isLoadingFailed: false,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const videosList = data.videos
      const formattedVideosList = videosList.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingList: formattedVideosList,
        isLoading: false,
      })
    } else {
      this.setState({
        isLoading: false,
        isLoadingFailed: true,
      })
    }
  }

  displayLoader = isDarkTheme => (
    <div className="loader-container" data-testid="loader">
      {isDarkTheme && (
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      )}
      {!isDarkTheme && (
        <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
      )}
    </div>
  )

  onRetryPage = () => {
    this.setState(
      {
        isLoading: true,
        isLoadingFailed: false,
      },
      this.getGamingVideos,
    )
  }

  displayFailedView = () => (
    <div className="loader-container">
      <PageNotFound onRetry={this.onRetryPage} />
    </div>
  )

  displayGamingItems = () => {
    const {gamingList} = this.state
    return (
      <ul className="gaming-container">
        {gamingList.map(each => (
          <GamingItems data={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, isLoadingFailed} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Headers />
              <div className="gaming-route">
                <NavigationBar />
                <GamingBackgroundContainer dark={isDarkTheme}>
                  <GamingHeader dark={isDarkTheme}>
                    <BackgroundGamingLogo dark={isDarkTheme}>
                      <IoGameController className="game-controller" />
                    </BackgroundGamingLogo>
                    <h1>Gaming</h1>
                  </GamingHeader>
                  {isLoading && this.displayLoader(isDarkTheme)}
                  {isLoadingFailed && this.displayFailedView()}
                  {!isLoading && !isLoadingFailed && this.displayGamingItems()}
                </GamingBackgroundContainer>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
