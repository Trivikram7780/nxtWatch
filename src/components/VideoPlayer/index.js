import {Component} from 'react'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import Headers from '../Header'
import NavigationBar from '../NavigationBar'
import {
  VideoPlayerContainer,
  LikeViewsContainer,
  UserActions,
  LikeDislikeButton,
} from './styledComponents'
import './index.css'

class VideoPlayer extends Component {
  state = {
    isLoading: true,
    videoObj: {},
  }

  componentDidMount() {
    this.getVideo()
  }

  getVideo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const videoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewsCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        isLoading: false,
        videoObj: videoDetails,
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

  render() {
    const {isLoading} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            addLikedVideos,
            likedList,
            dislikedList,
            savedPlayList,
            addDislikedVideos,
            addSavedVideos,
          } = value
          const {videoObj} = this.state
          const {id} = videoObj

          const isLiked = likedList.includes(id)
          const isDisliked = dislikedList.includes(id)
          const isSaved = savedPlayList.some(each => each.id === id)

          const displayVideoPlayer = () => {
            const {
              videoUrl,
              title,
              channel,
              viewsCount,
              publishedAt,
              description,
            } = videoObj
            const {name, profileImageUrl, subscriberCount} = channel
            const formatedDate = formatDistanceToNow(new Date(publishedAt))

            const onLike = () => {
              addLikedVideos(id)
            }

            const onDislike = () => {
              addDislikedVideos(id)
            }

            const onSave = () => {
              addSavedVideos(videoObj)
            }

            const removeFirstWord = word => {
              const indexOfSpace = word.indexOf(' ')
              if (indexOfSpace === -1) {
                return ''
              }
              return word.substring(indexOfSpace + 1)
            }

            return (
              <>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="80%"
                />
                <p className="title">{title}</p>
                <LikeViewsContainer dark={isDarkTheme}>
                  <div className="view-published">
                    <p>{viewsCount} Views</p>
                    <BsDot className="dot" />
                    <p className="published">
                      {removeFirstWord(formatedDate)} Ago
                    </p>
                  </div>
                  <UserActions dark={isDarkTheme}>
                    <LikeDislikeButton
                      dark={isDarkTheme}
                      onClick={onLike}
                      iconColor={isLiked}
                    >
                      <AiFillLike className="like" />
                    </LikeDislikeButton>
                    <span>Like</span>
                    <LikeDislikeButton
                      dark={isDarkTheme}
                      onClick={onDislike}
                      iconColor={isDisliked}
                    >
                      <AiFillDislike className="dislike" />
                    </LikeDislikeButton>
                    <span>Dislike</span>
                    <LikeDislikeButton
                      dark={isDarkTheme}
                      onClick={onSave}
                      iconColor={isSaved}
                    >
                      <BiListPlus className="saved-list" />
                      {isSaved && <span>Saved</span>}
                      {!isSaved && <span>Save</span>}
                    </LikeDislikeButton>
                  </UserActions>
                </LikeViewsContainer>
                <hr className="line" />
                <div className="profile-description">
                  <img
                    className="profile-img"
                    src={profileImageUrl}
                    alt="profile"
                  />
                  <div className="subscriber-count-container">
                    <span>{name}</span>
                    <span className="subscriber-count">
                      {subscriberCount} Subscribers
                    </span>
                    <p className="description">{description}</p>
                  </div>
                </div>
              </>
            )
          }

          return (
            <>
              <Headers />
              <div className="video-player-route">
                <NavigationBar />
                <VideoPlayerContainer dark={isDarkTheme}>
                  {isLoading
                    ? this.displayLoader(isDarkTheme)
                    : displayVideoPlayer(isDarkTheme)}
                </VideoPlayerContainer>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoPlayer
