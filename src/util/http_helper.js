function createHeaderGetBrawlers(token) {
  return {
    method: 'GET',
    url: 'https://api.brawlstars.com/v1/brawlers',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
}

module.exports = { createHeaderGetBrawlers }