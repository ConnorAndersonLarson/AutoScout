export const getCivs = () => {
  return fetch('/civilizations', {
    headers: {
      'access-control-allow-origin': 'https://age-of-empires-2-api.herokuapp.com',
      'accept': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}
