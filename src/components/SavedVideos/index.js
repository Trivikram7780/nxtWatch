import {IoSave} from 'react-icons/io5'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import TrendingVideoItem from '../TrendingVideoItem'
import './index.css'
import {
  SavedVideosContainer,
  NoVideoContainer,
  SavedHeaderContainer,
  BackgroundSavedLogo,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedPlayList} = value
      const len = savedPlayList.length
      console.log(savedPlayList)

      const displayNoList = () => (
        <NoVideoContainer dark={isDarkTheme}>
          <img
            className="no-videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
            alt="no videos"
          />
          <h1>No saved videos found</h1>
          <p>You can save your videos while watching them</p>
        </NoVideoContainer>
      )

      const displaySavedVideos = () => (
        <div className="saved-video-container">
          <SavedHeaderContainer dark={isDarkTheme}>
            <BackgroundSavedLogo dark={isDarkTheme}>
              <IoSave className="fire" />
            </BackgroundSavedLogo>
            <h1>Saved Videos</h1>
          </SavedHeaderContainer>
          <ul className="trending-videos-list">
            {savedPlayList.map(each => (
              <TrendingVideoItem data={each} key={each.id} />
            ))}
          </ul>
        </div>
      )

      return (
        <>
          <Header />
          <div className="saved-videos-route">
            <NavigationBar />
            <SavedVideosContainer dark={isDarkTheme}>
              {len === 0 && displayNoList()}
              {len !== 0 && displaySavedVideos()}
            </SavedVideosContainer>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
