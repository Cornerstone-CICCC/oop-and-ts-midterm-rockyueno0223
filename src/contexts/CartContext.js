export class CartContext {
  constructor() {
    this.cart = []
    this.listeners = []
  }

  addItem(item) {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id)

    if (existingItem) {
        existingItem.quantity++
    } else {
        this.cart.push({ ...item, quantity: 1 })
    }

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
