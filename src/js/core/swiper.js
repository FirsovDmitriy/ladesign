import Swiper from "swiper"

export default function swiper (selector, parameter) {

  if (document.querySelector(selector)) {
    return new Swiper(selector, parameter)
  } else console.error(`slider ${selector} not found`)
}
