import "../../components/footer/footer.js?v=4.0.0";
import "../../components/header/headerDesktop.js?v=4.0.0";
import "../../components/header/headerMobile.js?v=4.0.0";

export class LayoutHeaderAndFooter extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;

    this.innerHTML = `
      <header-desktop></header-desktop>
      <header-mobile></header-mobile>
      <main class="pt-[70px] lg:pt-13">
        ${content}
      </main>
      <custom-footer></custom-footer>
    `;
  }
}

customElements.define("header-and-footer", LayoutHeaderAndFooter);
