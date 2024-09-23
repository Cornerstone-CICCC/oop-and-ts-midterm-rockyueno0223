import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.cartContext.deleteItem(this.props.item)
  }

  render() {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <span>${this.props.item.title}</span> - <span>$${this.props.item.price}</span>
      <button class="delete-btn">Remove</button>
    `

    const deleteBtn = cartItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', this.handleDelete);

    return cartItem;
  }
}
