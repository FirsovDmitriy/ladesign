

class DOM {
  constructor(selector) {
    this.nativeElement = (typeof selector !== 'string') ? selector : document.querySelector(selector)
    this.selector = selector
  }

  on (eventType, f) {
    if (this.nativeElement) {
      this.nativeElement.addEventListener(eventType, f)
      return this 
    } else console.error(`Ошибка: Елемент с селектором ${this.selector} не найден`)
  }

  off (eventType, f) {
    this.nativeElement.removeEventListener(eventType, f)
  }

  add (className) {
    this.nativeElement.classList.add(className)
    return this
  }

  remove (className) {
    this.nativeElement.classList.remove(className)
    return this
  }

  toggle (className) {
    this.nativeElement.classList.toggle(className)
    return this
  }

  parent () {
    return this.nativeElement.parentElement
  }

  first () {
    return this.nativeElement.firstElementChild
  }

  next () {
    return this.nativeElement.nextElementSibling
  }

}

export default $ = selector => new DOM(selector)
