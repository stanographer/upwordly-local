// Finds the job details by shortName.
export const getJobDetails = async (shortName, jobs) => {
  const key = await Object.keys(jobs).find(key => jobs[key].shortName === shortName);
  return jobs[key];
};