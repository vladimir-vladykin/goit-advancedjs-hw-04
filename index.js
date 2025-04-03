import{a as y,S as L,i as b}from"./assets/vendor-Db2TdIkw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const w=15,S={key:"49592968-cbe332f50941125abd5725851",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:w};async function p(e,a){const r=new URLSearchParams(S);r.append("q",e),r.append("page",a);const s=`https://pixabay.com/api/?${r}`;return console.log("Request url is",s),(await y.get(s)).data.hits}function P(e){e.innerHTML='<button class="load-more-button">Load more</button>'}function d(e){e.innerHTML=""}function g(e){e.innerHTML='<span class="loader"></span>'}function v(e,a){const r=a.map(s=>M(s)).join("");e.insertAdjacentHTML("beforeend",r)}function M(e){return`
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
    `}let i=1,n="";const I=document.querySelector(".search-form"),u=document.querySelector(".gallery"),m=document.querySelector(".loading_layout");I.addEventListener("submit",e=>{if(e.preventDefault(),n=e.currentTarget.elements.search.value.trim(),n===""){l("Empty search query, please enter something");return}$(n)});const q=new L(".gallery a",{disableScroll:!1,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function $(e){i=1,d(u),g(m),p(e,i).then(a=>{if(a.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}f(a)}).catch(a=>{d(u),l(a)})}function E(){i++,g(m),p(n,i).then(e=>{f(e)}).catch(e=>{l(e),h()})}function f(e){v(u,e),h(),q.refresh()}function h(){P(m),document.querySelector(".load-more-button").addEventListener("click",a=>{E()})}function l(e){b.show({message:e,messageColor:"white",position:"topRight",backgroundColor:"#ef4040"})}
//# sourceMappingURL=index.js.map
