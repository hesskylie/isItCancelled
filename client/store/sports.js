import axios from 'axios'

const GET_SPORTS = 'GET_SPORTS'

const getSports = sports => ({type: GET_SPORTS, sports})

export const fetchSports = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/events/sports')
      dispatch(getSports(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GET_SPORTS:
      return action.sports
    default:
      return state
  }
}
