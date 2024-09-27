import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement('header')
    header.className = 'flex justify-center bg-[#7FB77E] text-white p-5'
    header.innerHTML = `
      <span class="font-serif text-xl">EC Website</span>
    `

    return header
  }
}
