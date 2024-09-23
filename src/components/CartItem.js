import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleIncrement() {
    this.props.cartContext.handleIncrement(this.props.item)
  }

  handleDecrement() {
    this.props.cartContext.handleDecrement(this.props.item)
  }

  handleDelete() {
    this.props.cartContext.deleteItem(this.props.item)
  }

  render() {
    const cartItem = document.createElement('li');
    cartItem.className = 'p-2'
    cartItem.innerHTML = `
      <span class="font-semibold">${this.props.item.title}</span><br>
      <span>$${this.props.item.price}</span> - <button class="decrement-btn">-</button><span>${this.props.item.quantity}</span><button class="increment-btn">+</button><br>
      <button class="delete-btn text-red-600">Remove</button>
    `

    const decrementBtn = cartItem.querySelector('.decrement-btn');
    decrementBtn.addEventListener('click', this.handleDecrement);

    const incrementBtn = cartItem.querySelector('.increment-btn');
    incrementBtn.addEventListener('click', this.handleIncrement);

    const deleteBtn = cartItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', this.handleDelete);

    return cartItem;
  }
}
