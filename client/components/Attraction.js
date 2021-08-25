import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchAttractions} from '../store/attraction'
import {followEvent} from '../store/user'

export const Attractions = props => {
  useEffect(() => {
    props.loadAttractions()
  }, [])

  if (props.attractions) {
    props.attractions.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  }

  const handleClick = id => {
    props.followAttraction(id)
  }

  return (
    <div>
      <h2>Attractions</h2>
      {!props.attractions ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="container">
            {props.attractions.map(attraction => (
              <div key={attraction.id} className={attraction.status}>
                {attraction.link ? (
                  <a href={attraction.link} target="_blank" rel="noreferrer">
                    {attraction.name}
                  </a>
                ) : (
                  attraction.name
                )}
                <button
                  type="button"
                  onClick={() => handleClick(attraction.id)}
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
  attractions: state.attractions
})

const mapDispatch = dispatch => ({
  loadAttractions: () => dispatch(fetchAttractions()),
  followAttraction: id => dispatch(followEvent(id))
})

export default connect(mapState, mapDispatch)(Attractions)
