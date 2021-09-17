import style from "./JobList.module.scss";
import Job from "../Job";
import cn from "classnames";

export default function ({ className, jobs }) {
  return (
    <div className={cn(className, style.root)}>
      {jobs.map((job,index) => (
        <Job job={job} key={index} />
      ))}
    </div>
  );
}
