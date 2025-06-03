class GoogleMapEmbed extends HTMLElement {
  connectedCallback() {
    const src =
      this.getAttribute("src") ||
      "https://maps.google.com/maps?q=-23.561079,-46.656512&z=15&output=embed";

    this.innerHTML = `
        <div class="relative w-full h-[500px] group">
          <div id="map-wrapper" class="pointer-events-none w-full h-full relative z-0">
            <iframe
              src="${src}"
              width="100%"
              height="500"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full"
            ></iframe>
          </div>

          <div
            class="absolute inset-0 bg-black/50 flex items-center justify-center z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
          >
            <p class="text-white text-sm md:text-base font-medium text-center px-4">
              Pressione Ctrl e role a tela simultaneamente para aplicar zoom no mapa
            </p>
          </div>
        </div>
      `;

    const wrapper = this.querySelector("#map-wrapper");

    this.addEventListener("click", () => {
      wrapper.classList.remove("pointer-events-none");
    });

    this.addEventListener("mouseleave", () => {
      wrapper.classList.add("pointer-events-none");
    });
  }
}

customElements.define("google-map-embed", GoogleMapEmbed);
