export function clearLayout(galleryList) {
  galleryList.innerHTML = '';
}

export function renderLoader(galleryList) {
  galleryList.innerHTML = `<span class="loader"></span>`;
}

export function renderImages(galleryList, images) {
  const markup = images
    .map(image => {
      return createImageMarkup(image);
    })
    .join('');

  console.log(`Markup is ${markup}`);
  galleryList.insertAdjacentHTML('beforeend', markup);
}

function createImageMarkup(image) {
  return `
        <li class="gallery-item">
            <a href="${image.largeImageURL}">
              <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
              <ul class="image-metadata-list">
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Likes</p>
                      <p class="image-metadata-item-value">${image.likes}</p>
                  </li>
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Views</p>
                      <p class="image-metadata-item-value">${image.views}</p>
                  </li>
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Comments</p>
                      <p class="image-metadata-item-value">${image.comments}</p>
                  </li>
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Downloads</p>
                      <p class="image-metadata-item-value">${image.downloads}</p>
                  </li>
              </ul>
            </a>
        </li>
    `;
}
