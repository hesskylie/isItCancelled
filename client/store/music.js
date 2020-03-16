import axios from 'axios'

const GET_MUSIC = 'GET_MUSIC'

const getMusic = music => ({type: GET_MUSIC, music})

export const fetchMusic = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/events/music')
      dispatch(getMusic(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GET_MUSIC:
      return action.music
    default:
      return state
  }
}
