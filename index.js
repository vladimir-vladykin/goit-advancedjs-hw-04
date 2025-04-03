import{a as L,S as b,i as w}from"./assets/vendor-Db2TdIkw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const d=15,I={key:"49592968-cbe332f50941125abd5725851",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d};async function g(e,a){const r=new URLSearchParams(I);r.append("q",e),r.append("page",a);const s=`https://pixabay.com/api/?${r}`,t=await L.get(s);return{images:t.data.hits,totalImageCount:t.data.totalHits}}function S(e){e.innerHTML='<button class="load-more-button">Load more</button>'}function c(e){e.innerHTML=""}function p(e){e.innerHTML='<span class="loader"></span>'}function v(e,a){const r=a.map(s=>P(s)).join("");e.insertAdjacentHTML("beforeend",r)}function P(e){return`
        <li class="gallery-item">
            <a href="${e.largeImageURL}">
              <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
              <ul class="image-metadata-list">
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Likes</p>
                      <p class="image-metadata-item-value">${e.likes}</p>
                  </li>
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Views</p>
                      <p class="image-metadata-item-value">${e.views}</p>
                  </li>
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Comments</p>
                      <p class="image-metadata-item-value">${e.comments}</p>
                  </li>
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Downloads</p>
                      <p class="image-metadata-item-value">${e.downloads}</p>
                  </li>
              </ul>
            </a>
        </li>
    `}let i=1,m="";const M=document.querySelector(".search-form"),f=document.querySelector(".gallery"),n=document.querySelector(".loading_layout");M.addEventListener("submit",e=>{if(e.preventDefault(),m=e.currentTarget.elements.search.value.trim(),m===""){l("Empty search query, please enter something");return}C(m)});const q=new b(".gallery a",{disableScroll:!1,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function C(e){i=1,c(f),p(n),g(e,i).then(a=>{if(a.images.length===0){l("Sorry, there are no images matching your search query. Please try again!"),c(n);return}h(a)}).catch(a=>{c(n),l(a.message)})}function T(){i++,p(n),g(m,i).then(e=>{h(e),$()}).catch(e=>{l(e.message),y(!0)})}function h({images:e,totalImageCount:a}){const s=i*d<a;v(f,e),y(s),q.refresh(),s||l("We're sorry, but you've reached the end of search results.")}function y(e){e?(S(n),document.querySelector(".load-more-button").addEventListener("click",r=>{T()})):c(n)}function $(){const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}function l(e){w.show({message:e,messageColor:"white",position:"topRight",backgroundColor:"#ef4040"})}
//# sourceMappingURL=index.js.map
