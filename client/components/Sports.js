import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSports} from '../store/sports'
import {followEvent} from '../store/user'

export const Sports = props => {
  useEffect(() => {
    props.loadSports()
  }, [])

  if (props.sports) {
    props.sports.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  }

  const handleClick = id => {
    props.followSport(id)
  }

  return (
    <div>
      <h2>Sports</h2>
      {!props.sports ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="container">
            {props.sports.map(sport => (
              <div key={sport.id} className={sport.status}>
                {sport.link ? (
                  <a href={sport.link} target="_blank" rel="noreferrer">
                    {sport.name}
                  </a>
                ) : (
                  sport.name
                )}
                <button type="button" onClick={() => handleClick(sport.id)}>
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
  sports: state.sports
})

const mapDispatch = dispatch => ({
  loadSports: () => dispatch(fetchSports()),
  followSport: id => dispatch(followEvent(id))
})

export default connect(mapState, mapDispatch)(Sports)
