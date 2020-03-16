import axios from 'axios'

const GET_CONFERENCES = 'GET_CONFERENCES'

const getConferences = conferences => ({type: GET_CONFERENCES, conferences})

export const fetchConferences = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/events/conference')
      dispatch(getConferences(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GET_CONFERENCES:
      return action.conferences
    default:
      return state
  }
}
