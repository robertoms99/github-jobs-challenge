import jobApi from '../../infrastructure/api/job.api'

const getJobsByLocation =async (location)=> {
   const jobs =  await jobApi.getJobsByLocation(location)
   console.log(jobs)
   return jobs
}

export default {getJobsByLocation}