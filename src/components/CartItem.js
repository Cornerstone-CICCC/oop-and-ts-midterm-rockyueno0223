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
    if (confirm("Are you ok to remove this item from cart?")) {
      this.props.cartContext.deleteItem(this.props.item)
      new Toast("The item was removed from your cart", Toast.TYPE_DONE, Toast.TIME_NORMAL)
    }
  }

  render() {
    const cartItem = document.createElement('li');
    cartItem.className = 'p-2'
    cartItem.innerHTML = `
      <span class="font-semibold">${this.props.item.title}</span>
      <br>
      <span class="flex flex-row justify-between my-1">
        <span class="border-2 border-[#7FB77E] rounded-lg">
          <button class="decrement-btn text-sm px-2">-</button>
          <span class="px-1">${this.props.item.quantity}</span>
          <button class="increment-btn text-sm px-2">+</button>
        </span>
        <span>$${this.props.item.price}</span>
      </span>
      <button class="delete-btn bg-red-600 text-white text-xs px-3 py-2 rounded hover:cursor-pointer">Remove</button>
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
