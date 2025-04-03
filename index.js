import{S as m,i as u}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const d={key:"49592968-cbe332f50941125abd5725851",image_type:"photo",orientation:"horizontal",safesearch:!0};function p(e){const t=new URLSearchParams(d);t.append("q",e);const o=`https://pixabay.com/api/?${t}`;return console.log("Request url is",o),fetch(o).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>s.hits)}function l(e){e.innerHTML=""}function f(e){e.innerHTML='<span class="loader"></span>'}function g(e,t){const o=t.map(s=>h(s)).join("");console.log(`Markup is ${o}`),e.insertAdjacentHTML("beforeend",o)}function h(e){return`
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
    `}document.querySelector("input[name=search]");document.querySelector(".search-form button");const y=document.querySelector(".search-form"),i=document.querySelector(".gallery");y.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.search.value.trim();t!==""&&b(t)});const L=new m(".gallery a",{disableScroll:!1,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function b(e){l(i),f(i),p(e).then(t=>{if(l(i),t.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}g(i,t),L.refresh()}).catch(t=>{l(i),c(t)})}function c(e){u.show({message:e,messageColor:"white",position:"topRight",backgroundColor:"#ef4040"})}
//# sourceMappingURL=index.js.map
