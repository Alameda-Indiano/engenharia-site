class EditableCard extends HTMLElement {
	connectedCallback() {
		const iconSrc = this.getAttribute("icon") || "/public/images/icons/eye.svg?v=2.0.0";
		const title = this.getAttribute("title") || "Título";
		const text = this.getAttribute("text") || "Texto do card";

		this.innerHTML = `
        <div class="bg-secondary text-white px-6 py-10 h-full flex flex-col justify-start items-start">
          <img src="${iconSrc}" alt="Icone" class="w-10 h-10 mb-6">
          <h3 class="text-[20px] font-bold mb-4">${title}</h3>
          <p class="text-sm leading-relaxed">${text}</p>
        </div>
      `;
	}
}

customElements.define("card-about", EditableCard);
