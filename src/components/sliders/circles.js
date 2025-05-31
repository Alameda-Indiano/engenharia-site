export class CircleFeature extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label") || "Título";
    const iconClass = this.getAttribute("icon") || "fa-cog";

    this.innerHTML = `
      <div class="flex flex-col items-center text-center">
        <div
          class="w-[160px] h-[160px] bg-no-repeat bg-center bg-cover rounded-full flex items-center justify-center"
          style="background-image: url('/images/svg/home/others/circle.svg');"
        >
          <i class="fas ${iconClass} text-white text-[64px]"></i>
        </div>
        <p class="mt-4 font-semibold text-text-primary">${label}</p>
      </div>
    `;
  }
}

customElements.define("circle-feature", CircleFeature);
