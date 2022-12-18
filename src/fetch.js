export { fetchCountries };
import { Notify } from 'notiflix';

function fetchCountries(name) {
  const urlApi = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(urlApi).then(response => {
    if (!response.ok) {
      throw Notify.failure('Oops, there is no country with that name');
    }
    return response.json();
  });
}
