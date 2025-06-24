class EditableCard extends HTMLElement {
  connectedCallback() {
    const iconSrc =
      this.getAttribute("icon") || "/public/images/icons/eye.svg?v=3.0.0";
    const title = this.getAttribute("title") || "Título";
    const text = this.getAttribute("text") || "Texto do card";

    this.innerHTML = `
        <div class="border-4 min-w-[350px] min-h-[300px] rounded-xl bg-secondary text-white px-6 py-8 flex flex-col items-center pt-16 max-w-sm mx-auto shadow-lg">
          <img src="${iconSrc}" alt="Ícone" class="w-12 h-12 mb-4">
          <h3 class="text-xl font-semibold mb-2 text-center">${title}</h3>
          <p class="font-light text-sm leading-relaxed text-center">${text}</p>
        </div>
      `;
  }
}

customElements.define("card-contact", EditableCard);
