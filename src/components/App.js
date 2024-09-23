import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = 'container'
    appContainer.innerHTML = `
      <div class='header-wrapper'></div>
      <h1>Shop Website</h1>
      <main class="flex">
        <div class='product-list-wrapper'></div>
        <div class='cart-list-wrapper'></div>
      </main>
      <div class='footer-wrapper'></div>
    `

    // Render components
    const header = new Header().render()
    const footer = new Footer({ copyright: 'Rocky' }).render()
    const productList = new ProductList().render()
    const cartList = new CartList().render()

    // Append components into DOM
    appContainer.querySelector('.header-wrapper').appendChild(header)
    appContainer.querySelector('.footer-wrapper').appendChild(footer)

    appContainer.querySelector('.product-list-wrapper').appendChild(productList)
    appContainer.querySelector('.cart-list-wrapper').appendChild(cartList)

    return appContainer
  }
}
