import{S as d,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const u="52256115-ef245d0d17a91a1d5cb51d54b",f="https://pixabay.com/api/";function p(o){const e=`${f}?key=${u}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(e).then(s=>{if(!s.ok)throw new Error(`Error: ${s.status}`);return s.json()})}function m(o){return o.map(e=>`<a href="${e.largeImageURL}" class="card">
            
            <img src="${e.webformatURL}" alt="${e.tags}" />

            <div class="stats">
                  <div class="stat">
                    <span>👍</span>
                    <p>${e.likes}</p>
                  </div>
                  <div class="stat">
                    <span>👁️</span>
                    <p>${e.views}</p>
                  </div>
                  <div class="stat">
                    <span>💬</span>
                    <p>${e.comments}</p>
                  </div>
                  <div class="stat">
                    <span>⬇️</span>
                    <p>${e.downloads}</p>
                  </div>
            </div>                  
            </a>`).join("")}const h=document.querySelector(".search_form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");let y=new d(".gallery a");h.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements.searchQuery.value.trim();e&&(c.innerHTML="",l.classList.remove("is-hidden"),p(e).then(s=>{if(!s.hits.length){a.info({title:"No results",message:"Sorry, no images found.",position:"topRight"});return}c.innerHTML=m(s.hits),y.refresh()}).catch(s=>{a.error({title:"Error",message:s.message,position:"topRight"})}).finally(()=>{l.classList.add("is-hidden")}))});
//# sourceMappingURL=index.js.map
