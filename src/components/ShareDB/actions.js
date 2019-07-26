export const deleteShareDbJob = (url, user, job) => {
  return fetch(`${url}/api?user=${user}&job=${job}`, {
    method: 'delete',
  });
};
