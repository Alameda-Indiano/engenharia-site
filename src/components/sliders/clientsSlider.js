export class ClientSlider extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<p class="text-center text-sm text-gray-500">Carregando logos de clientes...</p>`;

    try {
      const res = await fetch(
        "public/config/homepage/clientLogos.json?v=3.0.0"
      );
      this.clientLogos = await res.json();

      if (!Array.isArray(this.clientLogos)) throw new Error("Dados inválidos");

      this.index = 0;
      this.itemsPerPage = this.getItemsPerPage();

      this.render();
      this.setup();
      window.addEventListener("resize", this.handleResize.bind(this));
    } catch (err) {
      console.error("Erro ao carregar clientLogos.json:", err);
      this.innerHTML = `<p class="text-center text-red-500">Erro ao carregar clientes.</p>`;
    }
  }

  getItemsPerPage() {
    const width = window.innerWidth;
    if (width >= 1280) return 5;
    if (width >= 768) return 2;
    return 1;
  }

  render() {
    this.innerHTML = `
      <section class="py-[8%]">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-center text-3xl font-bold mb-4 text-text-primary">
            Conheça alguns de nossos clientes
          </h2>
          <p class="text-center text-base text-text-default mb-10">
            Empresas que confiam em nossa experiência
          </p>
          <div class="overflow-hidden">
            <div id="track" class="flex transition-transform duration-500 ease-in-out will-change-transform"></div>
          </div>
          <div id="pagination" class="flex justify-center mt-6 gap-2"></div>
        </div>
      </section>
    `;
  }

  setup() {
    this.track = this.querySelector("#track");
    this.pagination = this.querySelector("#pagination");

    this.renderSlides();
    this.cloneSlides();

    this.totalSlides = this.track.children.length;
    this.slideWidthPercent = 100 / this.itemsPerPage;
    this.pageCount = Math.ceil(this.clientLogos.length / this.itemsPerPage);

    this.renderDots();
    this.updateSlider();
    this.startAutoplay();
  }

  renderSlides() {
    const slideWidth = 100 / this.itemsPerPage;
    this.track.innerHTML = this.clientLogos
      .map(
        (src) => `
          <div style="flex: 0 0 ${slideWidth}%"
               class="flex items-center justify-center p-2 min-h-[120px]">
            <img
              src="${src}"
              alt="Logo cliente"
              class="max-h-28 object-contain transition duration-300"
            />
          </div>
        `
      )
      .join("");
  }

  cloneSlides() {
    const slideWidth = 100 / this.itemsPerPage;
    this.clientLogos.slice(0, this.itemsPerPage).forEach((src) => {
      const div = document.createElement("div");
      div.className = "flex items-center justify-center p-2 min-h-[120px]";
      div.style.flex = `0 0 ${slideWidth}%`;
      div.innerHTML = `
        <img
          src="${src}"
          alt="Logo cliente"
          class="max-h-28 object-contain transition duration-300"
        />
      `;
      this.track.appendChild(div);
    });
  }

  renderDots() {
    this.pagination.innerHTML = "";
    for (let i = 0; i < this.pageCount; i++) {
      const dot = document.createElement("button");
      dot.className = `w-2.5 h-2.5 rounded-full transition-all ${
        i === 0 ? "bg-gray-600" : "bg-gray-300"
      }`;
      dot.addEventListener("click", () => this.goToSlide(i));
      this.pagination.appendChild(dot);
    }
  }

  updateDots() {
    const dots = this.pagination.querySelectorAll("button");
    dots.forEach((dot, i) => {
      dot.className = `w-2.5 h-2.5 rounded-full transition-all ${
        i === Math.floor(this.index / this.itemsPerPage) % this.pageCount
          ? "bg-gray-600"
          : "bg-gray-300"
      }`;
    });
  }

  updateSlider() {
    const offset = this.index * this.slideWidthPercent;
    this.track.style.transform = `translateX(-${offset}%)`;
    this.updateDots();
  }

  goToSlide(i) {
    this.index = i * this.itemsPerPage;
    this.track.style.transition = "transform 0.5s ease-in-out";
    this.updateSlider();
  }

  startAutoplay() {
    this.interval = setInterval(() => {
      this.index++;
      this.track.style.transition = "transform 0.5s ease-in-out";
      this.updateSlider();

      if (this.index >= this.totalSlides - this.itemsPerPage) {
        setTimeout(() => {
          this.track.style.transition = "none";
          this.index = 0;
          this.updateSlider();
        }, 500);
      }
    }, 5000);
  }

  handleResize() {
    clearInterval(this.interval);
    this.index = 0;
    this.itemsPerPage = this.getItemsPerPage();
    this.render();
    this.setup();
  }

  disconnectedCallback() {
    clearInterval(this.interval);
    window.removeEventListener("resize", this.handleResize);
  }
}

customElements.define("client-slider", ClientSlider);
