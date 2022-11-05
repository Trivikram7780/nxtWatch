import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import TrendingVideoItem from '../TrendingVideoItem'
import PageNotFound from '../PageNotFound'
import {
  TrendingBackgroundContainer,
  TrendingHeader,
  BackgroundTrendingLogo,
} from './styledComponents'
import './index.css'

class Trending extends Component {
  state = {
    trendingVideosList: [],
    isLoading: true,
    isLoadingFailed: false,
  }

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        trendingVideosList: formattedVideosList,
        isLoading: false,
      })
    } else {
      this.setState({
        isLoading: false,
        isLoadingFailed: true,
      })
    }
  }

  getLoader = isDarkTheme => (
    <div className="loader-container" data-testid="loader">
      {isDarkTheme && (
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      )}
      {!isDarkTheme && (
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      )}
    </div>
  )

  onRetryTrending = () => {
    this.setState(
      {
        isLoading: true,
        isLoadingFailed: false,
      },
      this.getTrendingList,
    )
  }

  getFailedView = () => (
    <div className="loader-container">
      <PageNotFound onRetry={this.onRetryTrending} />
    </div>
  )

  getTrendingVideosList = () => {
    const {trendingVideosList} = this.state

    return (
      <ul className="trending-videos-list">
        {trendingVideosList.map(each => (
          <TrendingVideoItem data={each} key={each.id} />
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
              <Header />
              <div className="trend-route">
                <NavigationBar />
                <TrendingBackgroundContainer dark={isDarkTheme}>
                  <TrendingHeader dark={isDarkTheme}>
                    <BackgroundTrendingLogo dark={isDarkTheme}>
                      <AiFillFire className="fire" />
                    </BackgroundTrendingLogo>
                    <h1>Trending</h1>
                  </TrendingHeader>
                  {isLoading && this.getLoader(isDarkTheme)}
                  {isLoadingFailed && this.getFailedView()}
                  {!isLoading &&
                    !isLoadingFailed &&
                    this.getTrendingVideosList()}
                </TrendingBackgroundContainer>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
