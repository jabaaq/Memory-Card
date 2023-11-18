import {useEffect} from 'react';

function Service() {
  let _url = 'https://pokeapi.co/api/v2/pokemon/ditto';

  useEffect(() => {
    fetch(_url).then((response) => {
      if (!response.ok) {
        throw new Error(`Couldn't fetch ${_url}, status: ${response.status} `);
      }
      return response.json();
    });
  });
}

export {Service};
