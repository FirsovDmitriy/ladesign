export default class DOM {
  constructor(selector) {
    this.nativeElement = document.querySelector(selector)
    this.selector = selector
  }

  on (eventName, f) {
    if (this.nativeElement) {
      this.nativeElement.addEventListener(eventName, f)
      return this 
    } else console.error(`Ошибка: Елемент ${this.selector} не найден`)
  }

}
