import Swiper from "swiper"

export default function swiper (selector, parameter) {

  if (document.querySelector(selector)) {
    return new Swiper(selector, parameter)
  } else console.error(`Ошибка swiper js: слайдер с селектром ${selector} не найден`)
}
