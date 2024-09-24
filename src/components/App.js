import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = 'bg-[#FDF9F6]'
    appContainer.innerHTML = `
      <div class='header-wrapper'></div>
      <div class="container mx-auto">
        <main class="flex flex-col-reverse md:flex-row py-6">
          <div class='product-list-wrapper w-full md:w-3/4'></div>
          <div class='cart-list-wrapper w-full md:w-1/4'></div>
        </main>
      </div>
      <div class='footer-wrapper'></div>
    `

    // Render components
    const header = new Header().render()
    const footer = new Footer({ copyright: 'Rocky' }).render()
    const productList = new ProductList({ cartContext: this.props.cartContext })
    const cartList = new CartList({ cartContext: this.props.cartContext }).render()

    // Append components into DOM
    appContainer.querySelector('.header-wrapper').appendChild(header)
    appContainer.querySelector('.footer-wrapper').appendChild(footer)
    appContainer.querySelector('.cart-list-wrapper').appendChild(cartList)

    productList.mount(appContainer.querySelector('.product-list-wrapper'))

    return appContainer
  }
}
