import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import ThemeContext from './context/ThemeContext'
import Home from './components/Home'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoPlayer from './components/VideoPlayer'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    isDarkTheme: true,
    savedPlayList: [],
    likedList: [],
    dislikedList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addLikedVideos = id => {
    const {likedList, dislikedList} = this.state
    const formatedDisliked = dislikedList
    if (formatedDisliked.includes(id)) {
      const index = dislikedList.indexOf(id)
      console.log(index)
      formatedDisliked.splice(index, 1)
      this.setState(prevState => ({
        likedList: [...prevState.likedList, id],
        dislikedList: [...formatedDisliked],
      }))
    } else if (!likedList.includes(id)) {
      this.setState(prevState => ({
        likedList: [...prevState.likedList, id],
      }))
    } else {
      const index = likedList.indexOf(id)
      likedList.splice(index, 1)
      this.setState(prevState => ({
        likedList: [...prevState.likedList],
      }))
    }
  }

  addDislikedVideos = id => {
    const {likedList, dislikedList} = this.state
    if (likedList.includes(id)) {
      const index = likedList.indexOf(id)
      likedList.splice(index, 1)
      this.setState(prevState => ({
        likedList: [...likedList],
        dislikedList: [...prevState.dislikedList, id],
      }))
    } else if (!dislikedList.includes(id)) {
      this.setState(prevState => ({
        dislikedList: [...prevState.dislikedList, id],
      }))
    } else {
      const index = dislikedList.indexOf(id)
      dislikedList.splice(index, 1)
      this.setState(prevState => ({
        dislikedList: [...prevState.dislikedList],
      }))
    }
  }

  addSavedVideos = videoObj => {
    const {savedPlayList} = this.state
    if (savedPlayList.includes(videoObj)) {
      const index = savedPlayList.indexOf(videoObj)
      savedPlayList.splice(index, 1)
      this.setState({
        savedPlayList: [...savedPlayList],
      })
    } else {
      this.setState(prevState => ({
        savedPlayList: [...prevState.savedPlayList, videoObj],
      }))
    }
  }

  render() {
    const {isDarkTheme, savedPlayList, likedList, dislikedList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          savedPlayList,
          isDarkTheme,
          likedList,
          dislikedList,
          toggleTheme: this.toggleTheme,
          addLikedVideos: this.addLikedVideos,
          addDislikedVideos: this.addDislikedVideos,
          addSavedVideos: this.addSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoPlayer} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
