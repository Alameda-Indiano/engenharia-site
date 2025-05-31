class InfoCard extends HTMLElement {
  connectedCallback() {
    const icon = this.getAttribute("icon") || "";
    const title = this.getAttribute("title") || "Título";
    const subtitle = this.getAttribute("subtitle") || "Subtítulo";

    this.innerHTML = `
        <div class="flex flex-col items-center text-center max-w-xs mx-auto">
          <div class="w-24 h-24 flex items-center justify-center rounded-full bg-shadow-default mb-6">
            <img src="${icon}" alt="Ícone" class="w-10 h-10 object-contain" />
          </div>
          <h3 class="text-base md:text-lg font-semibold text-text-primary mb-2">${title}</h3>
          <p class="text-sm text-text-default leading-relaxed">${subtitle}</p>
        </div>
      `;
  }
}

customElements.define("info-card", InfoCard);
