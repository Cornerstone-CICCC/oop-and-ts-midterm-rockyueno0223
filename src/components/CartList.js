import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: [], totalQuantity: 0, totalPrice: 0.00 }
    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)
    this.productsListElement = null
  }

  updateCart(cart) { // cart is coming from context
    this.state.cart = cart

    // Clear the current ul
    this.productsListElement.innerHTML = ''

    // Iterate over cart items
    this.state.cart.forEach(item => {
      const cartItemComponent = new CartItem({
        item,
        cartContext: this.props.cartContext,
      }).render();
      this.productsListElement.appendChild(cartItemComponent);
    });

    this.updateTotals()
  }

  updateTotals() {
    const totalQuantity = this.state.cart.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = this.state.cart.reduce((total, item) => total + item.price * item.quantity, 0)

    this.state.totalQuantity = totalQuantity
    this.state.totalPrice = totalPrice.toFixed(2)

    this.renderTotals()
  }

  renderTotals() {
    const cartHeader = document.querySelector('.cart-header');
    const totalPriceElement = document.querySelector('.total-price');

    if (cartHeader && totalPriceElement) {
      cartHeader.textContent = `Cart (${this.state.totalQuantity})`
      totalPriceElement.textContent = `Total: $${this.state.totalPrice}`
    }
  }

  render() {
    const cartElement = document.createElement('div')
    cartElement.innerHTML = `
      <h3 class="cart-header">Cart (${this.state.totalQuantity})</h3>
      <ul></ul>
      <span class="font-bold total-price">Total: $${this.state.totalPrice}</span>
    `

    this.productsListElement = cartElement.querySelector('ul')

    return cartElement;
  }
}
