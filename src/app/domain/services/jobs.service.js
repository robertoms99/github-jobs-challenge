import jobApi from '../../infrastructure/api/job.api'

const getJobsByLocation =async (location)=> {
   const jobs =  await jobApi.getJobsByLocation(location)
   return jobs
}

const getJobsByDescription = async (description)=>{
   const jobs =  await jobApi.getJobsByOthersDescription(description)
   return jobs
}

const getJobById = async (id)=> {
   return await jobApi.getJobById(id)
}

export default {getJobsByLocation,getJobsByDescription,getJobById}