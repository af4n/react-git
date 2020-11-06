import React, {useEffect, useState} from "react"
import "./main.scss"
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../redux/actions/repos";
import Repo from "../repo/Repo";
import {setCurrentPage} from "../../redux/reducers/reposReducer";
import {createPages} from "../../utils/pagesCreator";

const Main = () => {
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.items)
  const isFetching = useSelector(state => state.repos.isFetching)
  const currentPage = useSelector(state => state.repos.currentPage)
  const totalCount = useSelector(state => state.repos.totalCount)
  const perPage = useSelector(state => state.repos.perPage)
  const [searchValue, setSearchValue] = useState("")
  const pagesCount = Math.ceil(totalCount/perPage)
  const pages = []

  createPages(pages, pagesCount, currentPage)
  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage))
  }, [currentPage])

  function searchHandler() {
    dispatch(setCurrentPage(1))
    dispatch(getRepos(searchValue, currentPage, perPage))
  }

  return (
    <div>
      <div className="input-group mt-4 mb-4 search">
        <input type="text"
               className="form-control search-name"
               placeholder="Введите название репозитория"
               value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => searchHandler()}>Поиск
          </button>
        </div>

      </div>
      {
        isFetching === false
          ? repos.map(repo => <Repo repo={repo} key={repo.id}/>)
          : <div className="fetching"> </div>
      }
      <div className="pages">
        {
          pages.map((page, index) => <span key={index}
                                           className={currentPage === page
                                             ? "current-page"
                                             : "page"}
          onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)
        }
      </div>
    </div>

  )
}

export default Main