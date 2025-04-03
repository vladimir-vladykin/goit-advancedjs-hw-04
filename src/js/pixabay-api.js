import axios from 'axios';

const pixabayBaseSearchParams = {
  key: '49592968-cbe332f50941125abd5725851',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export async function loadImages(searchQuery) {
  const searchParams = new URLSearchParams(pixabayBaseSearchParams);
  searchParams.append('q', searchQuery);

  const url = `https://pixabay.com/api/?${searchParams}`;
  console.log('Request url is', url);

  const response = await axios.get(url);
  return response.data.hits;

  // return fetch(url)
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   })
  //   .then(json => {
  //     return json.hits;
  //   });
}
