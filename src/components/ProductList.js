import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  render() {
    const productList = document.createElement('div')
    productList.innerHTML = `
      <h3>Product List</h3>
    `

    return productList
  }
}
