import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {VideoListItem} from './styledComponents'

const TrendingVideoItem = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {data} = props
      const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = data
      const {name} = channel
      const formattedTime = formatDistanceToNow(new Date(publishedAt))
      const removeFirstWord = word => {
        const indexOfSpace = word.indexOf(' ')

        if (indexOfSpace === -1) {
          return ''
        }

        return word.substring(indexOfSpace + 1)
      }

      return (
        <Link to={`/videos/${id}`} className="trending-video-item">
          <VideoListItem dark={isDarkTheme}>
            <img
              className="trending-video-thumbnail"
              src={thumbnailUrl}
              alt="trending video"
            />
            <div className="thumbnail-video-description">
              <p className="trending-title">{title}</p>
              <p className="channel-name">{name}</p>
              <span className="video-views">
                {viewCount} Views <BsDot className="dot" />
                {removeFirstWord(formattedTime)} Ago
              </span>
            </div>
          </VideoListItem>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default TrendingVideoItem
