import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props){
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleAddToCart() {
    this.props.cartContext.addItem(this.props.product)
  }

  render() {
    const productItem = document.createElement('div')
    productItem.className = 'flex flex-col p-4 lg:w-1/2'
    productItem.innerHTML = `
      <div class="h-64">
        <img
          src="${this.props.product.image}"
          alt="${this.props.product.title}"
          class="h-full w-auto object-contain mx-auto"
        />
      </div>
      <div class="py-6">
        <h3 class="font-semibold mb-2">${this.props.product.title}</h3>
        <p class="text-slate-600 leading-4">${this.props.product.description}</p>
        <div class="flex justify-between py-2 pe-2">
          <p>Rate: ${this.props.product.rating.rate} (${this.props.product.rating.count})</p>
          <p class="text-lg">$${this.props.product.price}</p>
        </div>
        <button class="add-to-cart-btn bg-[#7FB77E] text-white rounded py-2 px-3 hover:cursor-pointer">Add to Cart</button>
      </div>
    `

    productItem.querySelector('.add-to-cart-btn').addEventListener('click', this.handleAddToCart)

    return productItem;
  }
}
