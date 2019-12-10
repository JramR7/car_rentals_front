// helper to call http request using axios
import axios from 'axios';

const Http = {

  post: async function(url, data) {
    const postResponse = await axios.post(
      url,
      data
    );
    return postResponse;
  },

  get: async function(url) {
    const getResponse = await axios.get(url);
    return getResponse;
  },
}

export default Http;
