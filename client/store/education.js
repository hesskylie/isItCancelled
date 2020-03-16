import axios from 'axios'

const GET_EDUCATION = 'GET_EDUCATION'

const getEducation = education => ({type: GET_EDUCATION, education})

export const fetchEducation = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/events/education')
      dispatch(getEducation(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GET_EDUCATION:
      return action.education
    default:
      return state
  }
}
