import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <span>${this.props.item.title}</span> - <span>$${this.props.item.price}</span>
    `

    return cartItem;
  }
}
