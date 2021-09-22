import JobList from '../../components/common/JobList'
import Logo from '../../components/common/Logo/Logo'
import style from './Home.module.scss'
import FilterJobs from '../../components/common/FilterJobs'
import Pagination from '../../components/common/Pagination'
import { useJobs } from './hooks/useJobs'
import { useEffect, useState } from 'react'
import { DEFAULT_LOCATIONS } from '../../../../domain/setting/constants'
import SearchForm from './components/SearchForm/SearchForm'

export default function () {
  const { jobs, ...jobsHook } = useJobs([1, 2, 3, 4])
  const [isFullTime, setIsFullTime] = useState(false)
  const [locationFilter, setLocationFilter] = useState(DEFAULT_LOCATIONS[0])
  useEffect(jobsHook.getFilteredJobs)

  const onFullTimeChange = (isFullTime) => {
    setIsFullTime(isFullTime)
  }

  const onLocationFilterChange = (location) => {
    setLocationFilter(location)
  }

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
              onFullTimeChange={onFullTimeChange}
              isFullTime={isFullTime}
              locationFilter={locationFilter}
              onLocationFilterChange={onLocationFilterChange}
            />
          </article>
          <article className={style.rightContent}>
            <JobList jobs={jobs} className={style.jobList} />
          </article>
        </section>
        <Pagination count={4} totalCount={jobs.length} className={style.pagination} />
      </div>
    </main>
  )
}
