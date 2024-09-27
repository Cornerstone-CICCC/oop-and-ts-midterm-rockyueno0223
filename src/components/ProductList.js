import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      selectedCategory: "all"
    }
    this.sortData = this.sortData.bind(this)
  }

  mount(container) {
    fetch(`https://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        this.state.products = data
        container.appendChild(this.render())
      })
      .catch(error => console.error('Error retrieving data:', error))
  }

  sortData() {
    fetch(`https://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(data => {
        const selectedCategory = document.querySelector('#sort-product-select').value
        this.state.selectedCategory = selectedCategory

        if (selectedCategory === 'all') {
          this.state.products = data
        } else {
          this.state.products = data.filter(product => product.category === selectedCategory)
        }

        const container = document.querySelector(".product-list-wrapper");
        container.innerHTML = ""
        container.appendChild(this.render())
      })
      .catch(error => console.error('Error retrieving data:', error))
  }

  render() {
    const productList = document.createElement('div')
    productList.className = 'flex flex-col lg:flex-row flex-wrap mt-6'
    productList.innerHTML = `
      <div class="flex justify-end w-full pe-2 sm:pe-4 mb-4">
        <select
          name="sort-product-select"
          id="sort-product-select"
          class="border border-slate-500 rounded p-1"
        >
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>
    `

    this.state.products.forEach(product => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext
      })
      productList.appendChild(productItem.render())
    })

    const sortProductSelect = productList.querySelector('#sort-product-select')
    sortProductSelect.value = this.state.selectedCategory
    sortProductSelect.addEventListener('change', this.sortData)

    return productList
  }
}
