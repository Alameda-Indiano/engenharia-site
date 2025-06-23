export class CircleFeature extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label") || "Título";
    const image = this.getAttribute("image") || "";

    const isSvg = image.endsWith(".svg");

    const iconHtml = isSvg
      ? `<img src="${image}" alt="${label}" class="max-w-[80px] max-h-[80px] object-contain p-2" />`
      : `<i class="fas ${image} text-white text-[64px]"></i>`;

    this.innerHTML = `
      <div class="flex flex-col items-center text-center">
        <div
          class="w-[160px] h-[160px] bg-no-repeat bg-center bg-cover rounded-full flex items-center justify-center"
          style="background-image: url('public/images/svg/home/others/circle.svg?v=2.0.0');"
        >
          ${iconHtml}
        </div>
        <p class="mt-4 font-semibold text-text-primary">${label}</p>
      </div>
    `;
  }
}

customElements.define("circle-feature", CircleFeature);
