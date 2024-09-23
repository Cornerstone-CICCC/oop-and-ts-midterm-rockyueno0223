import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('footer')
    footer.className = 'flex justify-center align-center p-4 bg-slate-600'
    footer.innerHTML = `
      <span>Copyright 2024. ${this.props.copyright} All rights reserved.</span>
    `

    return footer
  }
}
