import axios from 'axios'

const GET_EVENTS = 'GET_EVENTS'

const getEvents = events => ({
  type: GET_EVENTS,
  events
})

export const fetchEvents = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users/following')
      const events = data.events
      dispatch(getEvents(events))
    } catch (err) {
      console.error(err)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.events
    default:
      return state
  }
}
