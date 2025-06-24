export class StaffSection extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<p class="text-center">Carregando equipe...</p>`;

    try {
      const res = await fetch("public/config/homepage/staff.json?v=3.0.0");
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
       <div class="overflow-y-auto max-h-[190px] no-scrollbar">
  ${summary || "Sem resumo disponível."}
</div>
        <a
          href="${linkedinUrl}"
          target="_blank"
          aria-label="LinkedIn"
          class="transition-transform duration-200 hover:scale-110"
        >
          <img width="22" src="public/images/icons/linkedin.svg?v=3.0.0" alt="LinkedIn"/>
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

  <div class="max-w-[1200px] mx-auto mt-20 px-6 text-center">
    <h3 class="text-xl md:text-3xl font-bold text-text-primary mb-6">
      Profissionais que constroem com excelência
    </h3>
    <p class="text-text-default text-sm md:text-base">
      Por trás de cada entrega da Capella Engenharia está o trabalho dedicado de nossos <span class="text-text-medium font-semibold">colaboradores de base — mestres de obras, técnicos, eletricistas, encanadores, soldadores, montadores e auxiliares</span> — que atuam diariamente com competência, comprometimento e atenção à segurança. São eles que transformam projetos em realidade, executando cada etapa com precisão, cuidado e respeito ao cronograma. Valorizamos cada profissional que veste a camisa da Capella, pois acreditamos que grandes resultados só são possíveis com pessoas engajadas e preparadas.
    </p>
    <div class="flex justify-center items-end gap-2 mt-10">
      <i class="fas fa-user text-gray-400 text-xl"></i>
      <i class="fas fa-user text-gray-500 text-2xl"></i>
      <i class="fas fa-user text-text-medium text-3xl"></i>
      <i class="fas fa-user text-gray-500 text-2xl"></i>
      <i class="fas fa-user text-gray-400 text-xl"></i>
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
