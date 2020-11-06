import React from "react";
import "./repo.scss"

const Repo = (props) => {
  const repo = props.repo

  return (
    <div className="repo list-group-item mt-2">
      <div className="repo-header ">
        <div className="repo-header-name">{repo.name}</div>
        <div className="repo-header-stars">Количество звезд: {repo.stargazers_count}</div>
      </div>
      <div className="repo-last-commit text-right">Последний коммит: {repo.updated_at}</div>
      <div className="text-right">
        <a href={repo.html_url} className="repo-link ">Ссылка на репозиторий: {repo.html_url}</a>
      </div>
    </div>
  )
}

export default Repo;
