export const getAmiibo = (name) =>
  fetch(`https://www.amiiboapi.com/api/amiibo/?name=${name}`)
    .then((data) => data.json())
    .then((result) => result)
    .catch((error) => error);
