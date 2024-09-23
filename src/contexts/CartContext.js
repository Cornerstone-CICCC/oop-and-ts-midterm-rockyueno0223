export class CartContext {
  constructor() {
    this.cart = []
    this.listeners = []
  }

  addItem(item) {
    this.cart.push(item)
    this.notifyListeners()
  }

  getCart() {
    return this.cart
  }

  subscribe(listener) {
    this.listeners.push(listener)
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.cart))
  }

  deleteItem(item) {
    this.cart = this.cart.filter(i => i !== item)
    this.notifyListeners()
  }
}
