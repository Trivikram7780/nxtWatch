import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import {GamingVideos, SpanTag} from './styledComponents'

const GamingItem = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {data} = props
      const {id, thumbnailUrl, viewCount, title} = data

      return (
        <Link to={`/videos/${id}`} className="game-video-route">
          <GamingVideos dark={isDarkTheme}>
            <img
              className="game-thumbnail-img"
              src={thumbnailUrl}
              alt="game thumbnail"
            />
            <p className="game-info">{title}</p>
            <SpanTag className="view-count" dark={isDarkTheme}>
              {viewCount} Watching Worldwide
            </SpanTag>
          </GamingVideos>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default GamingItem
