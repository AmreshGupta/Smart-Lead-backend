
const axios = require("axios");

async function getNationality(name) {
  const res = await axios.get(`https://api.nationalize.io?name=${name}`);
  if (!res.data.country.length) return null;
  return res.data.country[0];
}

module.exports = { getNationality };
