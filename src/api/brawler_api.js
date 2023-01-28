const axios = require('axios');
const { createHeaderGetBrawlers } = require('../util/http_helper');

async function getBrawlers() {
  try {
    const options = createHeaderGetBrawlers(process.env.AUTH_TOKEN);
    const response = await axios(options);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}



module.exports = { getBrawlers }


