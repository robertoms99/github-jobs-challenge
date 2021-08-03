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

export default function () {
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
            <FilterJobs className={style.filterJobs} />
          </article>
          <article className={style.rightContent}>
            <JobList jobs={[{ id: 1 }, { id: 2 }]} className={style.jobList} />
          </article>
          <Pagination count={5} />
        </section>
      </div>
    </main>
  );
}
