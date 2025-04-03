import{a as L,S as b,i as I}from"./assets/vendor-Db2TdIkw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const p=15,w={key:"49592968-cbe332f50941125abd5725851",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p};async function g(e,a){const s=new URLSearchParams(w);s.append("q",e),s.append("page",a);const r=`https://pixabay.com/api/?${s}`;console.log("Request url is",r);const t=await L.get(r);return{images:t.data.hits,totalImageCount:t.data.totalHits}}function S(e){e.innerHTML='<button class="load-more-button">Load more</button>'}function m(e){e.innerHTML=""}function f(e){e.innerHTML='<span class="loader"></span>'}function v(e,a){const s=a.map(r=>M(r)).join("");e.insertAdjacentHTML("beforeend",s)}function M(e){return`
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
    `}let n=1,l="";const P=document.querySelector(".search-form"),d=document.querySelector(".gallery"),c=document.querySelector(".loading_layout");P.addEventListener("submit",e=>{if(e.preventDefault(),l=e.currentTarget.elements.search.value.trim(),l===""){i("Empty search query, please enter something");return}T(l)});const q=new b(".gallery a",{disableScroll:!1,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function T(e){n=1,m(d),f(c),g(e,n).then(a=>{if(a.images.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}h(a)}).catch(a=>{m(d),i(a)})}function $(){n++,f(c),g(l,n).then(e=>{h(e)}).catch(e=>{i(e.message),y(!0)})}function h({images:e,totalImageCount:a}){const r=n*p<a;v(d,e),y(r),q.refresh(),r||i("We're sorry, but you've reached the end of search results.")}function y(e){e?(S(c),document.querySelector(".load-more-button").addEventListener("click",s=>{$()})):m(c)}function i(e){I.show({message:e,messageColor:"white",position:"topRight",backgroundColor:"#ef4040"})}
//# sourceMappingURL=index.js.map
