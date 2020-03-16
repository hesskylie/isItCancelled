import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchGeneral} from '../store/general'
import {followEvent} from '../store/user'

export const General = props => {
  useEffect(() => {
    props.loadGeneral()
  }, [])

  if (props.general) {
    props.general.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  }

  const handleClick = id => {
    props.followGeneral(id)
  }

  return (
    <div>
      <h2>General</h2>
      {!props.general ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="container">
            {props.general.map(general => (
              <div key={general.id} className={general.status}>
                {general.link ? (
                  <a href={general.link} target="_blank">
                    {general.name}
                  </a>
                ) : (
                  general.name
                )}
                <button type="button" onClick={() => handleClick(general.id)}>
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
  general: state.general
})

const mapDispatch = dispatch => ({
  loadGeneral: () => dispatch(fetchGeneral()),
  followGeneral: id => dispatch(followEvent(id))
})

export default connect(mapState, mapDispatch)(General)
