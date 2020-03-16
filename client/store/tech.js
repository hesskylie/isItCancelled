import axios from 'axios'

const GET_TECH = 'GET_TECH'

const getTech = tech => ({type: GET_TECH, tech})

export const fetchTech = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/events/tech')
      dispatch(getTech(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GET_TECH:
      return action.tech
    default:
      return state
  }
}
