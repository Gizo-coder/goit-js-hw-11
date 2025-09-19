
export function createImageCards(images) {
    return images

        .map(img => {
            return `<a href="${img.largeImageURL}" class="card">
            
            <img src="${img.webformatURL}" alt="${img.tags}" />

            <div class="stats">
                  <div class="stat">
                    <span>👍</span>
                    <p>${img.likes}</p>
                  </div>
                  <div class="stat">
                    <span>👁️</span>
                    <p>${img.views}</p>
                  </div>
                  <div class="stat">
                    <span>💬</span>
                    <p>${img.comments}</p>
                  </div>
                  <div class="stat">
                    <span>⬇️</span>
                    <p>${img.downloads}</p>
                  </div>
            </div>                  
            </a>`;
        })
        .join('');

}