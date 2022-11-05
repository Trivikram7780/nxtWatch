import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import {IndividualVideoItem} from './styledComponents'
import './index.css'

const HomeVideoItems = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {data} = props
      const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = data
      const {name, profileImageUrl} = channel
      const formattedTime = formatDistanceToNow(new Date(publishedAt))
      const removeFirstWord = word => {
        const indexOfSpace = word.indexOf(' ')
        if (indexOfSpace === -1) {
          return ''
        }
        return word.substring(indexOfSpace + 1)
      }

      return (
        <li>
          <Link to={`/videos/${id}`} className="link-videos">
            <IndividualVideoItem dark={isDarkTheme}>
              <img className="thumbnail" src={thumbnailUrl} alt="Thumbnail" />
              <div className="video-desc">
                <img
                  className="video-profile-img"
                  src={profileImageUrl}
                  alt="profile img"
                />
                <div className="video-information">
                  <p className="video-title">{title}</p>
                  <span className="video-name">{name}</span>
                  <span className="video-views">
                    {viewCount} Views <BsDot className="dot" />
                    {removeFirstWord(formattedTime)} Ago
                  </span>
                </div>
              </div>
            </IndividualVideoItem>
          </Link>
        </li>
      )
    }}
  </ThemeContext.Consumer>
)

export default HomeVideoItems
