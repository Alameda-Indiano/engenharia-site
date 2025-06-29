export class BannerSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

        <Section class="pt-36">
      <div class="w-full h-16 bg-background"></div>

      <div
        class="w-full bg-gradient-to-r
               from-gradient-banner-one to-gradient-banner-two
               text-center text-text-secondary
               py-28 px-6"
      >
        <div class="max-w-4xl mx-auto flex flex-col items-center space-y-10">
          <h2 class="text-3xl font-bold text-text-secondary">
            Quer conhecer a Capella Engenharia?
          </h2>
          <p class="text-sm md:text-base opacity-90 leading-relaxed max-w-3xl">
            nosso compromisso é sobre gerar valor de forma sustentável,
            assegurando a segurança e bem-estar de todos os envolvidos,
            enquanto entregamos obras com a mais alta qualidade.
          </p>
          <button-white href="/src/pages/contact/index.html?v=5.0.0" text="Entre em Contato!"></button-white>
        </div>
      </div>
      </section>
         
    `;
  }
}

customElements.define("banner-section", BannerSection);
