import {Component} from 'react'
import Cookies from 'js-cookie'
import {VscClose} from 'react-icons/vsc'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import HomeVideoItems from '../HomeVideoItems'
import NoSearchResults from '../NoSearchResults'
import {
  VideoBackgroundContainer,
  InputContainer,
  InputElement,
  SearchBackground,
  InputElementContainer,
} from './styledComponents'
import PageNotFound from '../PageNotFound'
import './index.css'

class Home extends Component {
  state = {
    homeVideosList: [],
    isBannerVisible: true,
    search: '',
    isLoading: true,
    isLoadingFailed: false,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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
        homeVideosList: formattedVideosList,
        isLoading: false,
      })
    } else {
      this.setState({
        isLoadingFailed: true,
        isLoading: false,
      })
    }
  }

  updateSearch = event => {
    this.setState({
      search: event.target.value,
    })
  }

  goForSearch = event => {
    if (event.key === 'Enter') {
      this.setState(
        {
          isLoading: true,
        },
        this.getVideosList,
      )
    }
  }

  deleteBanner = () => {
    this.setState({
      isBannerVisible: false,
    })
  }

  displayBanner = () => (
    <div className="background-banner" data-testid="banner">
      <div className="banner-left">
        <img
          className="banner-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
        />
        <p className="banner-msg">
          Buy NxtWatch Premium Prepaid Plans with UPI
        </p>
        <button className="banner-button" type="button">
          GET IT NOW
        </button>
      </div>
      <button
        className="banner-close-btn"
        type="button"
        onClick={this.deleteBanner}
      >
        <VscClose className="close-icon" />
      </button>
    </div>
  )

  loaderDisplay = isDarkTheme => (
    <div className="loader-container" data-testid="loader">
      {isDarkTheme && (
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      )}
      {!isDarkTheme && (
        <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
      )}
    </div>
  )

  onRetry = () => {
    this.setState(
      {
        isLoading: true,
        isLoadingFailed: false,
      },
      this.getVideosList,
    )
  }

  displayLoadingFailed = () => (
    <div className="loader-container">
      <PageNotFound onRetry={this.onRetry} />
    </div>
  )

  displayVideos = () => {
    const {homeVideosList} = this.state

    return (
      <ul className="video-display-container">
        {homeVideosList.map(each => (
          <HomeVideoItems data={each} key={each.id} />
        ))}
      </ul>
    )
  }

  onSearchBtn = () => {
    this.setState(
      {
        isLoading: true,
      },
      this.getVideosList,
    )
  }

  noVideoRetry = () => {
    this.setState(
      {
        search: '',
        isLoading: true,
      },
      this.getVideosList,
    )
  }

  displayNoSearchResults = () => (
    <div className="loader-container">
      <NoSearchResults noVideoRetry={this.noVideoRetry} />
    </div>
  )

  render() {
    const {
      isBannerVisible,
      search,
      isLoading,
      isLoadingFailed,
      homeVideosList,
    } = this.state

    const len = homeVideosList.length

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <div className="home-route">
                <NavigationBar />
                <VideoBackgroundContainer dark={isDarkTheme}>
                  {isBannerVisible && this.displayBanner()}
                  <InputContainer dark={isDarkTheme}>
                    <InputElementContainer dark={isDarkTheme}>
                      <InputElement
                        dark={isDarkTheme}
                        type="search"
                        placeholder="Search"
                        value={search}
                        onChange={this.updateSearch}
                        onKeyDown={this.goForSearch}
                      />
                    </InputElementContainer>
                    <SearchBackground dark={isDarkTheme}>
                      <button
                        className="search-btn"
                        type="button"
                        onClick={this.onSearchBtn}
                        data-testid="searchButton"
                      >
                        <BsSearch className="dark-search-icon" />
                      </button>
                    </SearchBackground>
                  </InputContainer>
                  {isLoading && this.loaderDisplay(isDarkTheme)}
                  {isLoadingFailed && this.displayLoadingFailed()}
                  {!isLoading &&
                    !isLoadingFailed &&
                    len !== 0 &&
                    this.displayVideos()}
                  {len === 0 && !isLoading && this.displayNoSearchResults()}
                </VideoBackgroundContainer>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
