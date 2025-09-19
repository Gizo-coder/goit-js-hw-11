import{S as d,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="52256115-ef245d0d17a91a1d5cb51d54b",f="https://pixabay.com/api/";function p(o){const t=`${f}?key=${u}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(s=>{if(!s.ok)throw new Error(`Error: ${s.status}`);return s.json()})}function h(o){return o.map(t=>`<a href="${t.largeImageURL}" class="card">
            
            <img src="${t.webformatURL}" alt="${t.tags}" />

            <div class="stats">
                  <div class="stat">
                    <span>👍</span>
                    <p>${t.likes}</p>
                  </div>
                  <div class="stat">
                    <span>👁️</span>
                    <p>${t.views}</p>
                  </div>
                  <div class="stat">
                    <span>💬</span>
                    <p>${t.comments}</p>
                  </div>
                  <div class="stat">
                    <span>⬇️</span>
                    <p>${t.downloads}</p>
                  </div>
            </div>                  
            </a>`).join("")}const m=document.querySelector(".search_form"),c=document.querySelector(".gallery"),i=document.querySelector(".loader");let g=new d(".gallery a");m.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();t&&(c.innerHTML="",i.classList.remove("is-hidden"),p(t).then(s=>{if(!s.hits.length){l.info({title:"No results",message:"Sorry, no images found.",position:"topRight"}),i.classList.add("is-hidden");return}c.innerHTML=h(s.hits),g.refresh();const n=c.querySelectorAll("img");let e=0;n.forEach(r=>{r.addEventListener("load",()=>{e++,e===n.length&&i.classList.add("is-hidden")}),r.addEventListener("error",()=>{e++,e===n.length&&i.classList.add("is-hidden")})})}).catch(s=>{l.error({title:"Error",message:s.message,position:"topRight"})}))});
//# sourceMappingURL=index.js.map
