import axios from 'axios'

const GET_GENERAL = 'GET_GENERAL'

const getGeneral = general => ({type: GET_GENERAL, general})

export const fetchGeneral = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/events/general')
      dispatch(getGeneral(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GET_GENERAL:
      return action.general
    default:
      return state
  }
}
