import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: true,
  savedPlayList: [],
  likedList: [],
  dislikedList: [],
  toggleTheme: () => {},
  addLikedVideos: () => {},
  addDislikedVideos: () => {},
  addSavedVideos: () => {},
})

export default ThemeContext
