'use strict'

import DOM from './core/dom'
import swiper from './core/swiper'
import {Navigation, Pagination} from 'swiper'

function $(selector) {
  return new DOM(selector)
}

$('.menu__item').on('click', () => console.log('click!!!'))

swiper('[data-slider]', {

  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },

  slidesPerView: 3,
  loop: true
})
