import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const productItem = document.createElement('div')
    productItem.className = 'flex flex-col p-4'
    productItem.innerHTML = `
      <div class="h-64">
        <img
          src="${this.props.product.image}"
          alt="${this.props.product.title}"
          class="h-full w-auto object-contain mx-auto"
        />
      </div>
      <div class="py-6">
        <h3>${this.props.product.title}</h3>
        <p>${this.props.product.description}</p>
        <div class="flex justify-between py-2">
          <p>Rate: ${this.props.product.rating.rate} (${this.props.product.rating.count})</p>
          <p>$${this.props.product.price}</p>
        </div>
      </div>
    `

    return productItem;
  }
}
