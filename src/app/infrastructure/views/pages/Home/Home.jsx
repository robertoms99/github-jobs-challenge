import Form from "../../components/common/Form/Form";
import JobList from "../../components/common/JobList";
import Logo from "../../components/common/Logo/Logo";
import style from "./Home.module.scss";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/ui/Button";
import buttonStyle from "../../components/ui/Button/Button.module.scss";
import InputDecorated from "../../components/ui/InputDecorated";
import cn from "classnames";
import FilterJobs from "../../components/common/FilterJobs";
import Pagination from "../../components/common/Pagination";
import { useJobs } from "./hooks/useJobs";
import { useEffect, useState } from "react";
import { DEFAULT_LOCATIONS } from "../../../../domain/setting/constants";

export default function () {
  const { jobs, ...jobsHook } = useJobs([1,2,3,4])
  const [isFullTime,setIsFullTime] = useState(false)
  const [locationFilter, setLocationFilter] = useState(DEFAULT_LOCATIONS[0])
  useEffect(jobsHook.getFilteredJobs)

  const onFullTimeChange = (isFullTime)=>{
    setIsFullTime(isFullTime)
  }

  const onLocationFilterChange = (location)=>{
    setLocationFilter(location)
  }

  return (
    <main className="container">
      <div className={style.root}>
        <Logo />
        <div className={style.banner}>
          <Form className={cn(style.form)}>
            <InputDecorated
              className={style.inputGroup}
              placeholder="Title, companies, expertise or benefits"
              icon={faBriefcase}
            />
            <Button className={cn(buttonStyle.primary)}>search</Button>
          </Form>
        </div>
        <section className={style.content}>
          <article className={style.leftContent}>
            <FilterJobs className={style.filterJobs} onFullTimeChange={onFullTimeChange} isFullTime={isFullTime} locationFilter={locationFilter} onLocationFilterChange={onLocationFilterChange}/>
          </article>
          <article className={style.rightContent}>
            <JobList jobs={jobs} className={style.jobList} />
          </article>
        </section>
        <Pagination count={5} className={style.pagination} />
      </div>
    </main>
  );
}
