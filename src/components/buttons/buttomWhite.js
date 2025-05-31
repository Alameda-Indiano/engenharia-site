export class ButtonWhite extends HTMLElement {
	connectedCallback() {
		const text = this.getAttribute("text") || "";

		this.innerHTML = `
      <div class="flex justify-center">
        <button
          class="bg-transparent
                 border-2 border-white
                 text-white
                 w-60 py-3
                 rounded-full font-bold
                 transition-transform duration-200
                 hover:scale-105
                 focus:outline-none"
        >
          ${text}
        </button>
      </div>
    `;
	}
}

customElements.define("button-white", ButtonWhite);
