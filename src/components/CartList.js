import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: [] }
    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)
    this.productsListElement = null
  }

  updateCart(cart) { // cart is coming from context
    this.state.cart = cart

    // Clear the current ul
    this.productsListElement.innerHTML = ''

    // Iterate over cart items
    const cartItems = this.state.cart.map(item => `<li>${item.title} - ${item.price}</li>`).join('')
    this.productsListElement.innerHTML = cartItems
  }

  render() {
    const cartElement = document.createElement('div')
    cartElement.innerHTML = `
      <h3>Cart</h3>
      <ul></ul>
    `

    this.productsListElement = cartElement.querySelector('ul')

    return cartElement;
  }
}
