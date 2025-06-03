export class ButtonGradient extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute("text") || "";
    const href = this.getAttribute("href");

    if (href) {
      this.innerHTML = `
        <div>
          <a
            href="${href}"
            class="
              bg-gradient-to-r from-gradient-buttom-one to-gradient-buttom-two
              w-60 py-3 rounded-full
              text-text-secondary font-semibold text-center
              inline-block
              transition-transform duration-200 hover:scale-105
              cursor-pointer
            "
          >
            ${text}
          </a>
        </div>
      `;
    } else {
      this.innerHTML = `
        <div>
          <button
            class="
              bg-gradient-to-r from-gradient-buttom-one to-gradient-buttom-two
              w-60 py-3 rounded-full
              text-text-secondary font-semibold text-center
              inline-block
              transition-transform duration-200 hover:scale-105
              cursor-pointer
              focus:outline-none
            "
            type="button"
          >
            ${text}
          </button>
        </div>
      `;
    }
  }
}

customElements.define("button-gradient", ButtonGradient);
