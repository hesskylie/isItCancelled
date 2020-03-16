import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchTech} from '../store/tech'
import {followEvent} from '../store/user'

export const Tech = props => {
  useEffect(() => {
    props.loadTech()
  }, [])

  if (props.tech) {
    props.tech.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  }

  const handleClick = id => {
    props.followTech(id)
  }

  return (
    <div>
      <h2>Tech</h2>
      {!props.tech ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="container">
            {props.tech.map(tech => (
              <div key={tech.id} className={tech.status}>
                {tech.link ? (
                  <a href={tech.link} target="_blank">
                    {tech.name}
                  </a>
                ) : (
                  tech.name
                )}
                <button type="button" onClick={() => handleClick(tech.id)}>
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
  tech: state.tech
})

const mapDispatch = dispatch => ({
  loadTech: () => dispatch(fetchTech()),
  followTech: id => dispatch(followEvent(id))
})

export default connect(mapState, mapDispatch)(Tech)
