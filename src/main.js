import { loadImages } from './js/pixabay-api.js';
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
    .then(images => {
      if (images.length === 0) {
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      updateLayoutWithNewImages(images);
    })
    .catch(error => {
      clearLayout(galleryList);
      showErrorMessage(error);
    });
}

function continueLoadingImages() {
  currentPage++;
  renderLoader(loadingLayout);

  loadImages(latestSearchQuery, currentPage)
    .then(images => {
      updateLayoutWithNewImages(images);
    })
    .catch(error => {
      showErrorMessage(error);

      // display load more button again in case we failed to load this part
      updateLoadMoreButton();
    });
}

function updateLayoutWithNewImages(images) {
  renderImages(galleryList, images);
  updateLoadMoreButton();
  lighboxInstance.refresh();
}

function updateLoadMoreButton() {
  displayLoadMoreButton(loadingLayout);
  const loadMoreButton = document.querySelector('.load-more-button');
  loadMoreButton.addEventListener('click', event => {
    continueLoadingImages();
  });

  // TODO check should we display button or hide
}

function showErrorMessage(message) {
  iziToast.show({
    message,
    messageColor: 'white',
    position: 'topRight',
    backgroundColor: '#ef4040',
  });
}
