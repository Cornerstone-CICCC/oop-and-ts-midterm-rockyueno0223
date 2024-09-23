import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement('header')
    header.className = 'flex justify-between bg-slate-600 p-6'
    header.innerHTML = `
      <div>
        <span>Logo</span>
      </div>
      <nav>
        <li><a href="#">Home</a></li>
      </nav>
    `

    return header
  }
}
