import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('footer')
    footer.className = 'flex justify-center align-center p-5 bg-[#7FB77E]'
    footer.innerHTML = `
      <span class="text-xs">Copyright 2024. ${this.props.copyright} All rights reserved.</span>
    `

    return footer
  }
}
