export class BlogCardGrid extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<p class="text-center">Carregando conteúdos...</p>`;

    try {
      const res = await fetch("public/config/blog/blogSection.json?v=2.0.0");
      const blogCards = await res.json();

      if (!Array.isArray(blogCards)) {
        console.warn("blogCards não é um array:", blogCards);
        this.innerHTML = `<p class="text-center text-red-500">Erro ao carregar os dados dos cards.</p>`;
        return;
      }

      const limitedCards = blogCards.slice(3, 9); // Ignora os 3 primeiros

      const cards = limitedCards
        .map(
          (item, i) => `
          <a href="/src/pages/blog/posts/index.html?id=${i}&v=2.0.0" class="block cursor-pointer w-full">
            <div class="relative group overflow-hidden bg-white" style="aspect-ratio: 4 / 3;">
              <img
                src="${item.image}"
                alt="${item.title}"
                class="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div
                class="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-60"
              ></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         px-6 py-4 bg-transparent max-w-[340px] text-center"
                  style="
                    border: 4px solid;
                    border-image-source: linear-gradient(to right, #5FAFF1, #40C1DD);
                    border-image-slice: 1;
                    border-radius: 0.75rem;
                  "
                >
                  <p class="text-white font-bold text-base md:text-[17px] leading-snug">
                    ${item.title}
                  </p>
                </div>
              </div>
            </div>
          </a>
        `
        )
        .join("");

      this.innerHTML = `
        <section class="w-full m-0 p-0">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            ${cards}
          </div>
        </section>
      `;
    } catch (err) {
      console.error("Erro ao carregar blogSection.json:", err);
      this.innerHTML = `<p class="text-center text-red-500">Erro ao carregar os conteúdos.</p>`;
    }
  }
}

customElements.define("blog-card-grid", BlogCardGrid);
