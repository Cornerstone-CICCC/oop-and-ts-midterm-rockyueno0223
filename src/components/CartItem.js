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
    cartItem.className = 'p-2'
    cartItem.innerHTML = `
      <span class="font-semibold">${this.props.item.title}</span><br>
      <span>$${this.props.item.price}</span> - <span>${this.props.item.quantity}</span><br>
      <button class="delete-btn text-red-600">Remove</button>
    `

    const deleteBtn = cartItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', this.handleDelete);

    return cartItem;
  }
}
