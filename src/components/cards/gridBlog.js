export class BlogGrid extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<p class="text-center">Carregando conteúdos...</p>`;
    try {
      const res = await fetch(
        "../../../public/config/blog/blogSection.json?v=2.0.0"
      );
      const posts = await res.json();

      if (!Array.isArray(posts)) {
        this.innerHTML = `<p class="text-center text-red-500">Erro ao carregar os dados dos cards.</p>`;
        return;
      }

      this.posts = posts.slice(3);
      this.filteredPosts = posts.slice();
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
      const faLink = document.createElement("link");
      faLink.rel = "stylesheet";
      faLink.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
      document.head.appendChild(faLink);
    }

    const input = this.querySelector("#searchInput");
    input.addEventListener("input", (e) => {
      this.searchTerm = e.target.value.trim().toLowerCase();
      this.currentPage = 1;
      this.applyFilter();
      this.renderGrid();
    });

    this.applyFilter();
    this.renderGrid();
  }

  applyFilter() {
    const termo = this.searchTerm;

    if (termo === "") {
      this.filteredPosts = this.posts.slice();
    } else {
      this.filteredPosts = this.posts.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(termo);

        let rawPub = Array.isArray(item.post.publication)
          ? item.post.publication.join(" ")
          : item.post.publication;
        rawPub = rawPub.replace(/<[^>]+>/g, "").toLowerCase();

        const contentMatch = rawPub.includes(termo);
        return titleMatch || contentMatch;
      });
    }

    this.totalPages = Math.ceil(this.filteredPosts.length / this.itemsPerPage);
  }

  renderGrid() {
    const container = this.querySelector("#gridContainer");

    if (this.filteredPosts.length === 0) {
      container.innerHTML = `
        <div class="text-center text-gray-600 py-16">
          Nenhum resultado encontrado para "<span class=\"font-semibold text-gray-800\">${this.searchTerm}</span>".
        </div>
      `;
      return;
    }

    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const pageItems = this.filteredPosts.slice(start, end);

    const cardsHtml = pageItems
      .map((item, idxInSlice) => {
        const realIndex = start + idxInSlice;

        let rawPub = Array.isArray(item.post.publication)
          ? item.post.publication.join(" ")
          : item.post.publication;
        rawPub = rawPub.replace(/<[^>]+>/g, "").trim();
        const snippet =
          rawPub.length > 120 ? rawPub.slice(0, 120).trim() + "..." : rawPub;

        return `
          <div
            data-index="${realIndex}"
            class="card bg-white rounded-lg overflow-hidden shadow h-full flex flex-col w-full max-w-sm cursor-pointer"
          >
            <div class="px-4 py-6">
              <h3 class="text-text-medium text-lg font-bold leading-tight">
                ${item.title}
              </h3>
            </div>
            <div class="w-full h-48 overflow-hidden">
              <img
                src="${item.image}"
                alt="${item.title}"
                class="block w-full h-full object-cover object-center transform scale-125"
              />
            </div>
            <div class="px-4 py-4 flex-1 flex flex-col">
              <p class="text-gray-600 text-sm flex-1 mb-4">
                ${snippet}
              </p>
              <a
                href="/src/pages/blog/posts/index.html?id=${realIndex}&v=2.0.0"
                class="mt-auto text-text-details font-medium"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        `;
      })
      .join("");

    const paginationHtml = `
      <div class="flex justify-center mt-16 space-x-2">
        ${Array.from({ length: this.totalPages }, (_, i) => {
          const isActive = this.currentPage === i + 1;
          return `
            <button
              data-page="${i + 1}"
              class="px-3 py-1 rounded ${
                isActive
                  ? "bg-secondary text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }"
            >
              ${i + 1}
            </button>
          `;
        }).join("")}
      </div>
    `;

    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        ${cardsHtml}
      </div>
      ${paginationHtml}
    `;

    this.querySelectorAll("#gridContainer .card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = Number(card.getAttribute("data-index")) + 3;
        window.location.href = `/src/pages/blog/posts/index.html?id=${id}`;
      });
    });

    this.querySelectorAll("[data-page]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const selected = Number(e.currentTarget.getAttribute("data-page"));
        if (selected !== this.currentPage) {
          this.currentPage = selected;
          this.renderGrid();
        }
      });
    });
  }
}

customElements.define("blog-grid", BlogGrid);
