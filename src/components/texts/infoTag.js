export class InfoTag extends HTMLElement {
	connectedCallback() {
		const text = this.getAttribute("text");

		this.innerHTML = `
      <div class="bg-shadow-default inline-flex items-center rounded">
        <p class="text-sm text-text-primary font-bold border-l-4 border-text-details pl-3 pr-4 py-2 mb-0">
          ${text}
        </p>
      </div>
    `;
	}
}

customElements.define("info-tag", InfoTag);
