import axios from 'axios'

const GET_ATTRACTIONS = 'GET_ATTRACTIONS'

const getAttractions = attractions => ({type: GET_ATTRACTIONS, attractions})

export const fetchAttractions = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/events/attraction')
      dispatch(getAttractions(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GET_ATTRACTIONS:
      return action.attractions
    default:
      return state
  }
}
