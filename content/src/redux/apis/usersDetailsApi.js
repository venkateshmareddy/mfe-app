import API from '../../API/API.js';
const api = new API();
const endPoints = 'v1/sample-data/photos?offset=5&limit=15';
export const usersDetailsApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}`);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

  

  