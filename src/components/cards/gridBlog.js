export class BlogGrid extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<p class="text-center">Carregando conteúdos...</p>`;
    try {
      const res = await fetch(
        "../../../public/config/blog/blogSection.json?v=5.0.0"
      );
      const posts = await res.json();
      if (!Array.isArray(posts)) {
        this.innerHTML = `<p class="text-center text-red-500">Erro ao carregar os dados dos cards.</p>`;
        return;
      }

      // pega os posts a partir do 4º
      this.posts = posts.slice(3);

      // pré-carrega rawText de cada publication
      await Promise.all(
        this.posts.map(async (item) => {
          const pub = item.post.publication;
          if (typeof pub === "string" && pub.endsWith(".html")) {
            const html = await fetch(pub).then((r) => r.text());
            const tmp = document.createElement("div");
            tmp.innerHTML = html;
            item.post.rawText = tmp.innerText.replace(/\s+/g, " ").trim();
          } else {
            const raw = Array.isArray(pub) ? pub.join(" ") : String(pub);
            item.post.rawText = raw
              .replace(/<[^>]+>/g, " ")
              .replace(/\s+/g, " ")
              .trim();
          }
        })
      );

      this.filteredPosts = this.posts.slice();
      this.searchTerm = "";
      this.currentPage = 1;
      this.itemsPerPage = 6;
      this.totalPages = Math.ceil(
        this.filteredPosts.length / this.itemsPerPage
      );

      this.renderWithSearch();
    } catch {
      this.innerHTML = `<p class="text-center text-red-500">Erro ao carregar os conteúdos.</p>`;
    }
  }

  renderWithSearch() {
    this.innerHTML = `
      <section class="w-full p-0">
        <div class="container mx-auto px-4">
          <div class="flex justify-start mb-16">
            <div class="relative w-[390px]">
              <input
                id="searchInput"
                type="text"
                placeholder="Pesquisar..."
                class="w-full bg-white text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-text-details"
                value="${this.searchTerm}"
              />
              <i class="fa fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>
          </div>
          <div id="gridContainer"></div>
        </div>
      </section>
    `;

    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fa = document.createElement("link");
      fa.rel = "stylesheet";
      fa.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
      document.head.appendChild(fa);
    }

    this.querySelector("#searchInput").addEventListener("input", (e) => {
      this.searchTerm = e.target.value.trim().toLowerCase();
      this.currentPage = 1;
      this.applyFilter();
      this.renderGrid();
    });

    this.applyFilter();
    this.renderGrid();
  }

  applyFilter() {
    const termo = this.searchTerm.toLowerCase();
    if (!termo) {
      this.filteredPosts = this.posts.slice();
    } else {
      this.filteredPosts = this.posts.filter((item) => {
        const inTitle = item.title.toLowerCase().includes(termo);
        const inPub = (item.post.rawText || "").toLowerCase().includes(termo);
        return inTitle || inPub;
      });
    }
    this.totalPages = Math.ceil(this.filteredPosts.length / this.itemsPerPage);
  }

  renderGrid() {
    const container = this.querySelector("#gridContainer");
    if (this.filteredPosts.length === 0) {
      container.innerHTML = `
        <div class="text-center text-gray-600 py-16">
          Nenhum resultado para "<span class="font-semibold text-gray-800">${this.searchTerm}</span>".
        </div>`;
      return;
    }
    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const pageItems = this.filteredPosts.slice(start, end);

    const cardsHtml = pageItems
      .map((item, idx) => {
        const index = start + idx;

        // **aqui usamos item.summary primeiro, depois rawText**
        const src = item.summary?.trim()
          ? item.summary.trim()
          : item.post.rawText || "";

        const snippet =
          src.length > 120 ? src.slice(0, 120).trim() + "..." : src;

        return `
        <div data-index="${index}"
             class="card bg-white rounded-lg overflow-hidden shadow h-full flex flex-col w-full max-w-sm cursor-pointer">
          <div class="px-4 py-6">
            <h3 class="text-text-medium text-lg font-bold leading-tight">${item.title}</h3>
          </div>
          <div class="w-full h-48 overflow-hidden">
            <img src="${item.image}"
                 alt="${item.title}"
                 class="block w-full h-full object-cover object-center transform scale-125"/>
          </div>
          <div class="px-4 py-4 flex-1 flex flex-col">
            <p class="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">${snippet}</p>
            <a href="/src/pages/blog/posts/index.html?id=${index}&v=5.0.0"
               class="mt-auto text-text-details font-medium">Saiba Mais</a>
          </div>
        </div>`;
      })
      .join("");

    const paginationHtml = `
      <div class="flex justify-center mt-16 space-x-2">
        ${Array.from({ length: this.totalPages }, (_, i) => {
          const page = i + 1;
          const active = page === this.currentPage;
          return `
            <button data-page="${page}"
                    class="px-3 py-1 rounded ${
                      active
                        ? "bg-secondary text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                    }">${page}</button>`;
        }).join("")}
      </div>`;

    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        ${cardsHtml}
      </div>
      ${paginationHtml}`;

    // clique no card
    this.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = Number(card.dataset.index) + 3;
        window.location.href = `/src/pages/blog/posts/index.html?id=${id}`;
      });
    });
    // paginação
    this.querySelectorAll("[data-page]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const page = Number(e.currentTarget.dataset.page);
        if (page !== this.currentPage) {
          this.currentPage = page;
          this.renderGrid();
        }
      });
    });
  }
}

customElements.define("blog-grid", BlogGrid);
