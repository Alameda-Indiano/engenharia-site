export class TextSection extends HTMLElement {
  connectedCallback() {
    const prefix = this.getAttribute("prefix") || "";
    const highlight = this.getAttribute("highlight") || "";
    const suffix = this.getAttribute("suffix") || "";
    const subtitle = this.getAttribute("subtitle") || "";

    this.innerHTML = `
      <div class="text-center max-w-5xl mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold mb-4">
          <span class="text-text-primary">${prefix}&nbsp;</span>
          <span class="text-text-details">${highlight}</span>
          ${
            suffix
              ? `<span class="text-text-primary">&nbsp;${suffix}</span>`
              : ""
          }
        </h2>
        ${
          subtitle
            ? `<p class="text-text-default leading-relaxed">${subtitle}</p>`
            : ""
        }
      </div>
    `;
  }
}

customElements.define("text-guide", TextSection);
