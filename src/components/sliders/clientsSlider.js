export class ClientSlider extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<p class="text-center text-sm text-gray-500">Carregando logos de clientes...</p>`;

    try {
      const res = await fetch(
        "/public/config/homepage/clientLogos.json?v=5.0.0"
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
      <section class="bg-primary py-16 mb-20 px-4 text-center relative overflow-hidden">
        <h2 class="text-3xl font-bold text-text-primary mb-4">
          Conheça alguns de nossos clientes
        </h2>
        <p class="text-base text-text-default mb-16">
          Empresas que confiam em nossa experiência
        </p>
        <div class="max-w-7xl mx-auto relative flex items-center gap-4">
          <button id="prevBtn" class="bg-[#5c5d6180] w-10 h-10 rounded flex items-center justify-center shadow hover:scale-105 transition z-10">
            <i class="fas fa-chevron-left text-white text-sm"></i>
          </button>

          <div class="flex-1 overflow-hidden">
            <div id="trackContainer" class="w-full">
              <div id="track" class="flex transition-transform duration-500 ease-in-out"></div>
            </div>
          </div>

          <button id="nextBtn" class="bg-[#5c5d6180] w-10 h-10 rounded flex items-center justify-center shadow hover:scale-105 transition z-10">
            <i class="fas fa-chevron-right text-white text-sm"></i>
          </button>
        </div>
      </section>
    `;
  }

  setup() {
    this.track = this.querySelector("#track");
    this.prevBtn = this.querySelector("#prevBtn");
    this.nextBtn = this.querySelector("#nextBtn");

    this.renderSlides();
    this.cloneSlides();

    this.totalSlides = this.track.children.length;
    this.slideWidthPercent = 100 / this.itemsPerPage;

    this.prevBtn.addEventListener("click", () => this.navigate(-1));
    this.nextBtn.addEventListener("click", () => this.navigate(1));

    this.startAutoplay();
  }

  renderSlides() {
    this.track.innerHTML = "";
    const w = 100 / this.itemsPerPage;
    this.clientLogos.forEach((src) => {
      const wrapper = document.createElement("div");
      wrapper.className = "flex items-center justify-center p-2 min-h-[120px]";
      wrapper.style.flex = `0 0 ${w}%`;
      wrapper.innerHTML = `<img src="${src}" alt="Logo cliente" class="max-h-28 object-contain transition duration-300" />`;
      this.track.appendChild(wrapper);
    });
  }

  cloneSlides() {
    const w = 100 / this.itemsPerPage;
    this.clientLogos.slice(0, this.itemsPerPage).forEach((src) => {
      const wrapper = document.createElement("div");
      wrapper.className = "flex items-center justify-center p-2 min-h-[120px]";
      wrapper.style.flex = `0 0 ${w}%`;
      wrapper.innerHTML = `<img src="${src}" alt="Logo cliente" class="max-h-28 object-contain transition duration-300" />`;
      this.track.appendChild(wrapper);
    });
  }

  navigate(direction) {
    this.index += direction;
    this.track.style.transition = "transform 0.5s ease-in-out";
    this.updateSlider();

    if (this.index >= this.totalSlides - this.itemsPerPage) {
      setTimeout(() => {
        this.track.style.transition = "none";
        this.index = 0;
        this.updateSlider();
      }, 500);
    }
    if (this.index < 0) {
      this.track.style.transition = "none";
      this.index = this.totalSlides - this.itemsPerPage - 1;
      this.updateSlider();
    }
  }

  updateSlider() {
    const offset = this.index * this.slideWidthPercent;
    this.track.style.transform = `translateX(-${offset}%)`;
  }

  startAutoplay() {
    this.interval = setInterval(() => this.navigate(1), 2000);
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
