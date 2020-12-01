import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCurrentRepo, getContributors } from '../../redux/actions/repos'
import './card.scss'

const Card = (props) => {
  const { username, reponame } = useParams()
  const [repo, setRepo] = useState({ owner: {} })
  const [contributors, setContributors] = useState([])

  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo)
    getContributors(username, reponame, setContributors)
  }, [])

  return (
    <div>
      <button onClick={() => props.history.goBack()} class="back-btn">
        BACK
      </button>
      <div className="card">
        <img src={repo.owner.avatar_url} alt="" />
        <div className="name">{repo.name}</div>
        <div className="stars">{repo.starzers_count}</div>
      </div>
      <div>
        {contributors.map((c, index) => (
          <div>
            {index + 1}. {c.login}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
