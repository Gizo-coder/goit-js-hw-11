
import { fetchImages } from './api.js';
import { createImageCards } from './render.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './style.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search_form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', e => {
    e.preventDefault();
    const query = e.target.elements.searchQuery.value.trim();
    if (!query) return;

    gallery.innerHTML = '';
    loader.classList.remove('is-hidden');

    fetchImages(query)
        .then(data => {
            if (!data.hits.length) {
                iziToast.info({
                    title: 'No results',
                    message: 'Sorry, no images found.',
                    position: 'topRight',
                
                });

                return;
            }

            gallery.innerHTML = createImageCards(data.hits);
            lightbox.refresh();

        })
        .catch(err => {
        
            iziToast.error({
                title: 'Error',
                message: err.message,
                position: 'topRight',
            });
        })
        .finally(() => {
            loader.classList.add('is-hidden');
        });
});


