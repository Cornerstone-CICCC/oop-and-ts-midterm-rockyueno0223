import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  render() {
    const cartList = document.createElement('div')
    cartList.innerHTML = `
      <h3>Cart List</h3>
    `

    return cartList
  }
}
