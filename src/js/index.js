import $ from './core/dom'
import swiper from './core/swiper'
import {Navigation, Pagination} from 'swiper'

$(document).on('DOMContentLoaded', init)

function init () {

  $(document).on('click', documentAction)

  function documentAction (e) {
    let currentElement = e.target

    function onClick (atrr, f, text = '') {
      if (currentElement.hasAttribute(atrr, text)) {
        return f()
      }
    }

    // -------
    function elementSearch(atrr, text = '') {
      if (currentElement.hasAttribute(atrr, text)) return true
    }
    // -------

    onClick('data-burger', () => {
      let test = $('[data-burger]').parent()
      $('[data-burger]').toggle('header__btn-burger--active').toggle('header__btn-burger--dark')
      $('[data-nav]').toggle('menu--visible')
      $('[data-phone-icon]').toggle('phone__icon--theme-dark')
    })

    onClick('data-control', () => {
      let label = $(currentElement).next()
      $(label).toggle('control__label--active')
    })
  }

  $('[data-close-button]').on('click', () => console.log('click'))

  swiper('.swiper', {

    modules: [Navigation, Pagination],
    spaceBetween: 10,
    speed: 800,

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },

    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    breakpoints: {
      // when window width is >= 1400px
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },

    }

  })

}
