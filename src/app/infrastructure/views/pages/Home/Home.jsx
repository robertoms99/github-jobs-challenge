import JobList from '../../components/common/JobList'
import Logo from '../../components/common/Logo/Logo'
import style from './Home.module.scss'
import FilterJobs from '../../components/common/FilterJobs'
import Pagination from '../../components/common/Pagination'
import { useJobs } from './hooks/useJobs'
import { useEffect, useState } from 'react'
import { DEFAULT_LOCATIONS, MAX_COUNT_ITEMS_PER_PAGE } from '../../../../domain/setting/constants'
import SearchForm from './components/SearchForm/SearchForm'

const Home = ()=> {

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
            <JobList jobs={[]} className={style.jobList} />
          </article>
        </section>
        <Pagination count={MAX_COUNT_ITEMS_PER_PAGE} totalCount={0} className={style.pagination} />
      </div>
    </main>
  )
}

export default Home