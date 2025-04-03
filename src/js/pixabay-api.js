import axios from 'axios';

export const HITS_PER_PAGE = 15;

const pixabayBaseSearchParams = {
  key: '49592968-cbe332f50941125abd5725851',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: HITS_PER_PAGE,
};

export async function loadImages(searchQuery, page) {
  const searchParams = new URLSearchParams(pixabayBaseSearchParams);
  searchParams.append('q', searchQuery);
  searchParams.append('page', page);

  const url = `https://pixabay.com/api/?${searchParams}`;
  console.log('Request url is', url);

  const response = await axios.get(url);
  return {
    images: response.data.hits,
    totalImageCount: response.data.totalHits,
  };
}
