import React from 'react'
import {Link} from 'react-router-dom'

const AllCats = props => {
  return (
    <>
      <h2>All Categories</h2>
      <ul>
        <li>
          <Link to="">Attractions</Link>
        </li>
        <li>
          <Link to="">Conferences</Link>
        </li>
        <li>
          <Link to="">General</Link>
        </li>
        <li>
          <Link to="">Music</Link>
        </li>
        <li>
          <Link to="">Sports</Link>
        </li>
        <li>
          <Link to="">Tech</Link>
        </li>
      </ul>
    </>
  )
}

export default AllCats
