export class SolutionGrid extends HTMLElement {
  async connectedCallback() {
    const src = this.getAttribute("config-src");
    if (!src) {
      this.innerHTML = `
        <div class="px-8 py-8 text-center text-red-500">
          Erro: informe o atributo <code>config-src</code>.
        </div>`;
      return;
    }

    this.innerHTML = `
      <div class="px-8 py-8 text-center text-text-primary">
        Carregando soluções...
      </div>`;

    try {
      const res = await fetch(src);
      const cards = await res.json();
      if (!Array.isArray(cards)) throw new Error("JSON inválido");

      this.innerHTML = `
        <div class="px-8 lg:px-20 py-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            ${cards
              .map(
                ({ title, description }) => `
              <div
                class="bg-gradient-to-r
                       from-gradient-lines-one
                       to-gradient-lines-two
                       p-0.5
                       rounded-lg"
              >
                <div
                  class="bg-primary
                         rounded-[0.375rem]
                         p-6
                         h-full
                         flex
                         flex-col"
                >
                  <h3 class="text-gradient-lines-one font-semibold text-lg mb-2">
                    ${title}
                  </h3>
                  <p class="text-text-primary text-sm leading-relaxed flex-1">
                    ${description}
                  </p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    } catch (err) {
      console.error("Erro ao carregar soluções:", err);
      this.innerHTML = `
        <div class="px-8 py-8 text-center text-red-500">
          Não foi possível carregar as soluções.
        </div>`;
    }
  }
}

customElements.define("solution-grid", SolutionGrid);
