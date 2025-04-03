import{a as m,S as u,i as d}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const p={key:"49592968-cbe332f50941125abd5725851",image_type:"photo",orientation:"horizontal",safesearch:!0};async function f(e){const t=new URLSearchParams(p);t.append("q",e);const s=`https://pixabay.com/api/?${t}`;return console.log("Request url is",s),(await m.get(s)).data.hits}function l(e){e.innerHTML=""}function g(e){e.innerHTML='<span class="loader"></span>'}function h(e,t){const s=t.map(i=>y(i)).join("");e.insertAdjacentHTML("beforeend",s)}function y(e){return`
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
    `}const L=document.querySelector(".search-form"),o=document.querySelector(".gallery");L.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.search.value.trim();t!==""&&w(t)});const b=new u(".gallery a",{disableScroll:!1,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function w(e){l(o),g(o),f(e).then(t=>{if(l(o),t.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}h(o,t),b.refresh()}).catch(t=>{l(o),c(t)})}function c(e){d.show({message:e,messageColor:"white",position:"topRight",backgroundColor:"#ef4040"})}
//# sourceMappingURL=index.js.map
