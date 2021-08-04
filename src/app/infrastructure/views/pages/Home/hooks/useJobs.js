import { useState } from "react";

export const useJobs = function (value = []) {
  const [jobs, setJobs] = useState(value);

  const getFilteredJobs = () => {};

  return {
    jobs,
    getFilteredJobs,
  };
};
