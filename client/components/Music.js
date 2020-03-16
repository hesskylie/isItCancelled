import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchMusic} from '../store/music'
import {followEvent} from '../store/user'

export const Music = props => {
  useEffect(() => {
    props.loadMusic()
  }, [])

  if (props.music) {
    props.music.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  }

  const handleClick = id => {
    props.followMusic(id)
  }

  return (
    <div>
      <h2>Music</h2>
      {!props.music ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="container">
            {props.music.map(music => (
              <div key={music.id} className={music.status}>
                {music.link ? (
                  <a href={music.link} target="_blank">
                    {music.name}
                  </a>
                ) : (
                  music.name
                )}
                <button type="button" onClick={() => handleClick(music.id)}>
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
  music: state.music
})

const mapDispatch = dispatch => ({
  loadMusic: () => dispatch(fetchMusic()),
  followMusic: id => dispatch(followEvent(id))
})

export default connect(mapState, mapDispatch)(Music)
