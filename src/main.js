import { loadImages, HITS_PER_PAGE } from './js/pixabay-api.js';
import {
  renderImages,
  clearLayout,
  renderLoader,
  displayLoadMoreButton,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let currentPage = 1;
let latestSearchQuery = '';
const searchForm = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');
const loadingLayout = document.querySelector('.loading_layout');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  latestSearchQuery = event.currentTarget.elements.search.value.trim();

  if (latestSearchQuery === '') {
    showErrorMessage('Empty search query, please enter something');
    return;
  }

  startLoadingImages(latestSearchQuery);
});

// setup lib for image details
const lighboxInstance = new SimpleLightbox('.gallery a', {
  disableScroll: false,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

function startLoadingImages(searchQuery) {
  currentPage = 1;
  clearLayout(galleryList);
  renderLoader(loadingLayout);

  loadImages(searchQuery, currentPage)
    .then(imageData => {
      if (imageData.images.length === 0) {
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      updateLayoutWithNewImages(imageData);
    })
    .catch(error => {
      clearLayout(loadingLayout);
      showErrorMessage(error.message);
    });
}

function continueLoadingImages() {
  currentPage++;
  renderLoader(loadingLayout);

  loadImages(latestSearchQuery, currentPage)
    .then(imageData => {
      updateLayoutWithNewImages(imageData);
      smoothScrollDownIfPossible();
    })
    .catch(error => {
      showErrorMessage(error.message);

      // display load more button again in case we failed to load this part
      updateLoadMoreButton(true);
    });
}

function updateLayoutWithNewImages({ images, totalImageCount }) {
  const loadedImagesCount = currentPage * HITS_PER_PAGE;

  const stillMoreImagesToLoad = loadedImagesCount < totalImageCount;
  renderImages(galleryList, images);
  updateLoadMoreButton(stillMoreImagesToLoad);
  lighboxInstance.refresh();

  if (!stillMoreImagesToLoad) {
    showErrorMessage(
      "We're sorry, but you've reached the end of search results."
    );
  }
}

function updateLoadMoreButton(shouldButtonBeAvailable) {
  if (shouldButtonBeAvailable) {
    displayLoadMoreButton(loadingLayout);
    const loadMoreButton = document.querySelector('.load-more-button');
    loadMoreButton.addEventListener('click', event => {
      continueLoadingImages();
    });
  } else {
    clearLayout(loadingLayout);
  }
}

function smoothScrollDownIfPossible() {
  const anyCard = document.querySelector('.gallery-item');
  const cardHeight = anyCard.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function showErrorMessage(message) {
  iziToast.show({
    message,
    messageColor: 'white',
    position: 'topRight',
    backgroundColor: '#ef4040',
  });
}
