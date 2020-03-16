import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchEducation} from '../store/education'
import {followEvent} from '../store/user'

export const Education = props => {
  useEffect(() => {
    props.loadEducation()
  }, [])

  if (props.education) {
    props.education.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  }

  const handleClick = id => {
    props.followEducation(id)
  }

  return (
    <div>
      <h2>Education</h2>
      {!props.education ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="container">
            {props.education.map(education => (
              <div key={education.id} className={education.status}>
                {education.link ? (
                  <a href={education.link} target="_blank">
                    {education.name}
                  </a>
                ) : (
                  education.name
                )}
                <button type="button" onClick={() => handleClick(education.id)}>
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
  education: state.education
})

const mapDispatch = dispatch => ({
  loadEducation: () => dispatch(fetchEducation()),
  followEducation: id => dispatch(followEvent(id))
})

export default connect(mapState, mapDispatch)(Education)
