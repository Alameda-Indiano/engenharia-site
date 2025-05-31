export class ButtonGradient extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute("text");

    this.innerHTML = `
      <div>
        <input
          class="bg-gradient-to-r from-gradient-buttom-one to-gradient-buttom-two w-60 py-3 cursor-pointer rounded-full text-text-secondary font-semibold transition-transform duration-200 hover:scale-105"
          type="button"
          value="${text}"
        />
      </div>
    `;
  }
}

customElements.define("button-gradient", ButtonGradient);
