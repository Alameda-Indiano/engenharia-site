export class StaffSection extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<p class="text-center">Carregando equipe...</p>`;

    try {
      const res = await fetch("/config/homepage/staff.json");
      const staffConfig = await res.json();
      if (!Array.isArray(staffConfig)) throw new Error("Dados inválidos");

      const cardsHtml = staffConfig
        .map(
          ({ name, role, imageUrl, linkedinUrl, summary }) => `
  <div class="group [perspective:1000px] w-full max-w-[280px] p-4 cursor-pointer">
    <div
      class="relative w-full h-[360px] transition-transform duration-500
             [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
    >
      <!-- face frontal -->
      <div
        class="absolute inset-0 bg-white rounded-2xl shadow-md p-4
               flex flex-col items-center justify-start [backface-visibility:hidden]"
      >
        <div class="bg-background w-full h-[240px] rounded-xl overflow-hidden mb-4">
          <img src="${imageUrl}" alt="${name}" class="w-full h-full object-cover"/>
        </div>
        <h3 class="text-base font-semibold text-text-primary">${name}</h3>
        <p class="text-sm text-gray-500 font-medium mt-1">${role}</p>
      </div>

      <!-- face traseira -->
      <div
        class="absolute inset-0 bg-white rounded-2xl shadow-md p-4
               flex flex-col items-center justify-center gap-8 [transform:rotateY(180deg)]
               [backface-visibility:hidden]"
      >
        <p class="text-center text-text-default px-4">
          ${summary || "Sem resumo disponível."}
        </p>
        <a
          href="${linkedinUrl}"
          target="_blank"
          aria-label="LinkedIn"
          class="transition-transform duration-200 hover:scale-110"
        >
          <img width="22" src="/images/icons/linkedin.svg" alt="LinkedIn"/>
        </a>
      </div>
    </div>
  </div>
  `
        )
        .join("");

      this.innerHTML = `
  <section class="w-full bg-shadow-default py-[15%] lg:py-[10%]">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <p class="text-sm text-gray-500 uppercase mb-2 font-semibold tracking-wide">
        Nosso Time
      </p>
      <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-4">
        Toda estrutura começa com pessoas
      </h2>
      <p class="text-gray-500 max-w-2xl mx-auto text-sm md:text-base mb-10">
        Nosso time atua com eficiência e proximidade, oferecendo soluções técnicas e um suporte confiável em cada etapa do projeto.
      </p>
      <div class="flex flex-wrap justify-center gap-6 sm:gap-10">
        ${cardsHtml}
      </div>
    </div>
  </section>
  `;
    } catch {
      this.innerHTML = `<p class="text-center text-red-500">Erro ao carregar equipe.</p>`;
    }
  }
}

customElements.define("team-member-card", StaffSection);
