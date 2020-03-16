import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchConferences} from '../store/conference'
import {followEvent} from '../store/user'

export const Conferences = props => {
  useEffect(() => {
    props.loadConferences()
  }, [])

  if (props.conferences) {
    props.conferences.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  }

  const handleClick = id => {
    props.followConference(id)
  }

  return (
    <div>
      <h2>Conferences</h2>
      {!props.conferences ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="container">
            {props.conferences.map(conference => (
              <div key={conference.id} className={conference.status}>
                {conference.link ? (
                  <a href={conference.link} target="_blank">
                    {conference.name}
                  </a>
                ) : (
                  conference.name
                )}
                <button
                  type="button"
                  onClick={() => handleClick(conference.id)}
                >
                  Follow
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const mapState = state => ({
  conferences: state.conferences
})

const mapDispatch = dispatch => ({
  loadConferences: () => dispatch(fetchConferences()),
  followConference: id => dispatch(followEvent(id))
})

export default connect(mapState, mapDispatch)(Conferences)
