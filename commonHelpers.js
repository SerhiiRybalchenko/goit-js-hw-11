import{S as d,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const h="43397479-99c41be14727e3df52aa3c242",p="https://pixabay.com/api/?";function m(n){const t=new URLSearchParams({key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${p}${t}`;return fetch(i).then(o=>{if(!o.ok)throw new Error("Failed to fetch");return o.json()}).then(o=>o).catch(o=>{throw console.error("Error fetching data:",o),o})}const g=new d(".card-item a",{captionsData:"alt",captionDelay:250});function y(n,t){if(!t.hits.length){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=L(t.hits);n.insertAdjacentHTML("beforeend",i),g.refresh()}function L(n){return n.map(({webformatURL:t,largeImageURL:i,tags:o,likes:e,views:r,comments:s,downloads:f})=>`<li class="card-item">
  <a href=${i}
    ><img src=${t} alt="${o}" height="300"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${e}</p>
      </li>
      <li>
        Views
        <p>${r}</p>
      </li>
      <li>
        Comments
        <p>${s}</p>
      </li>
      <li>
        Downloads
        <p>${f}</p>
      </li>
    </ul></a
  >
</li>`).join("")}const S=document.querySelector(".search-form"),a=document.querySelector(".search-input"),l=document.querySelector(".card-list"),E=document.querySelector(".loader");S.addEventListener("submit",P);function P(n){n.preventDefault();const t=a.value.trim();if(!t){c.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}l.innerHTML="",u(),m(t).then(i=>{y(l,i),a.value=""}).catch(i=>{c.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error("Fetch error:",i)}).finally(()=>{u()})}function u(){E.classList.toggle("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
