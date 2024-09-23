export class CartContext {
  constructor() {
    this.carts = [];
  }

  addCart(cart) {
    this.carts.push(cart);
  }

  getCart() {
    return this.carts;
  }
}
