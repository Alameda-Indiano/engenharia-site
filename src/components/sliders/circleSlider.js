import "./circles.js?v=5.0.0";

export class CircleSlider extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<p class="text-center text-sm text-white">Carregando carrossel...</p>`;

    try {
      const res = await fetch(
        "/public/config/homepage/circleSlider.json?v=5.0.0"
      );
      this.slides = await res.json();

      if (!Array.isArray(this.slides)) throw new Error("Dados inválidos");

      this.index = 0;
      this.itemsPerPage = this.getItemsPerPage();

      this.render();
      this.setup();
      window.addEventListener("resize", this.handleResize.bind(this));
    } catch (err) {
      console.error("Erro ao carregar circleSlider.json:", err);
      this.innerHTML = `<p class="text-center text-red-500">Erro ao carregar carrossel.</p>`;
    }
  }

  getItemsPerPage() {
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    if (width >= 768) return 2;
    return 1;
  }

  render() {
    this.innerHTML = `
      <section class="bg-primary py-16 px-4 text-center relative overflow-hidden">
        <h2 class="text-3xl font-bold text-text-primary mb-4">
          Conheça algumas das nossas soluções!
        </h2>
        <p class="text-base text-text-default mb-16">
          Descubra como podemos ajudar o seu negócio a crescer
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
    this.slides.forEach(({ image, label }) => {
      const wrapper = document.createElement("div");
      wrapper.className = "flex justify-center";
      wrapper.style.flex = `0 0 ${100 / this.itemsPerPage}%`;

      const feature = document.createElement("circle-feature");
      feature.setAttribute("image", image);
      feature.setAttribute("label", label);

      wrapper.appendChild(feature);
      this.track.appendChild(wrapper);
    });
  }

  cloneSlides() {
    this.slides.slice(0, this.itemsPerPage).forEach(({ image, label }) => {
      const div = document.createElement("div");
      div.className = "flex justify-center";
      div.style.flex = `0 0 ${100 / this.itemsPerPage}%`;

      const feature = document.createElement("circle-feature");
      feature.setAttribute("image", image);
      feature.setAttribute("label", label);

      div.appendChild(feature);
      this.track.appendChild(div);
    });
  }

  updateSlider() {
    const offset = this.index * this.slideWidthPercent;
    this.track.style.transform = `translateX(-${offset}%)`;
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

  startAutoplay() {
    this.interval = setInterval(() => this.navigate(1), 5000);
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

customElements.define("circle-slider", CircleSlider);
