import JobList from '../../components/common/JobList'
import Logo from '../../components/common/Logo/Logo'
import style from './Home.module.scss'
import FilterJobs from '../../components/common/FilterJobs'
import Pagination from '../../components/common/Pagination'
import {  MAX_COUNT_ITEMS_PER_PAGE } from '../../../../domain/setting/constants'
import SearchForm from './components/SearchForm/SearchForm'
import { useContext, useState } from 'react'
import FilterContext from '../../context/FilterContext'
import Loader from '../../components/ui/Loader/Loader'

const Home = ()=> {
  const {jobs,isFullTime,loading}= useContext(FilterContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  let jobsToShow = jobs.filter((job)=> (isFullTime && job.isFullTime) || !isFullTime )
  const startIndex = currentIndex * MAX_COUNT_ITEMS_PER_PAGE
  const endIndex = Math.min(jobsToShow.length, startIndex + MAX_COUNT_ITEMS_PER_PAGE)
  const jobsInPage = jobsToShow.slice(startIndex,endIndex)

  return (
    <main className="container">
      <div className={style.root}>
        <Logo />
        <div className={style.banner}>
          <SearchForm className={style.form} />
        </div>
        <section className={style.content}>
          <article className={style.leftContent}>
            <FilterJobs
              className={style.filterJobs}
            />
          </article>
          <article className={style.rightContent}>
          {loading ? <Loader content="loading jobs..." /> :  <JobList jobs={jobsInPage} className={style.jobList} />}
          </article>
        </section>
        {!loading && (<Pagination setCurrentIndex={setCurrentIndex} count={MAX_COUNT_ITEMS_PER_PAGE} totalCount={jobsToShow.length} className={style.pagination} />)}
      </div>
    </main>
  )
}

export default Home