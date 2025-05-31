import "../../components/header/headerDesktop.js";
import "../../components/footer/footer.js";
import "../../components/header/headerMobile.js";

export class LayoutHeaderAndFooter extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;

    this.innerHTML = `
      <header-desktop></header-desktop>
      <header-mobile></header-mobile>
      <main class="pt-20 lg:pt-13">
        ${content}
      </main>
      <custom-footer></custom-footer>
    `;
  }
}

customElements.define("header-and-footer", LayoutHeaderAndFooter);
