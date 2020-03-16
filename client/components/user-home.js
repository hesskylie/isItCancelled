import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchEvents} from '../store/events'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  useEffect(() => {
    props.loadFollowing()
  }, [])

  const handleClick = id => {}

  return (
    <div>
      <h3>Welcome, {email}</h3>

      <h4>Followed Events:</h4>
      {props.events ? (
        <ul>
          {props.events.map(event => (
            <div key={event.id}>
              <li>{event.name}</li>
              <button type="button" onClick={() => handleClick(event.id)}>
                Unfollow
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <p>You are not following any events.</p>
      )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    events: state.events
  }
}

const mapDispatch = dispatch => ({
  loadFollowing: () => dispatch(fetchEvents())
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
