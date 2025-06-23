export class HeaderMobile extends HTMLElement {
  connectedCallback() {
    this.className = "w-full fixed top-0 left-0 z-50 lg:hidden";

    this.innerHTML = `
      <div class="w-full bg-header-primary text-text-primary px-6 py-2 min-h-16">
        <div class="max-w-screen-xl mx-auto flex justify-between items-center">
          <img
            src="/public/images/png/logo.png?v=2.0.0"
            width="70"
            alt="Logo Capella"
          />
          <button id="mobile-menu-button" class="text-xl">
            <i id="menu-icon" class="fas fa-bars transition duration-300 ease-in-out"></i>
          </button>
        </div>
      </div>

      <ul id="mobile-menu"
        class="hidden flex-col bg-secondary text-text-secondary px-6 py-6 font-semibold text-base absolute w-full top-full left-0 z-40 transition-all duration-300 ease-in-out opacity-0 -translate-y-2 space-y-2 shadow-lg">
        <li><a href="/index.html?v=2.0.0" class="block py-2 px-2 hover:bg-shadow-secondary rounded transition-colors">Home</a></li>
        <li><a href="/src/pages/about/index.html?v=2.0.0" class="block py-2 px-2 hover:bg-shadow-secondary rounded transition-colors">Sobre</a></li>

        <li id="solucoes-toggle" class="py-2 px-2 flex items-center justify-between hover:bg-shadow-secondary rounded transition-colors cursor-pointer">
          <span>Soluções</span>
          <i id="solucoes-icon" class="fas fa-angle-down text-sm transition-transform duration-300"></i>
        </li>
        <ul id="submenu-solucoes" class="hidden flex-col pl-4 space-y-1">
          <li>
            <a href="/src/pages/solutions/civil/index.html?v=2.0.0" class="block py-2 px-2 text-sm hover:bg-shadow-secondary rounded transition-colors">Obra Industrial Civil</a>
          </li>
          <li>
            <a href="/src/pages/solutions/industrial/index.html?v=2.0.0" class="block py-2 px-2 text-sm hover:bg-shadow-secondary rounded transition-colors">Instalações Industriais</a>
          </li>
          <li>
            <a href="/src/pages/solutions/projects/index.html?v=2.0.0" class="block py-2 px-2 text-sm hover:bg-shadow-secondary rounded transition-colors">Projetos de Engenharia</a>
          </li>
        </ul>

        <li id="governanca-toggle" class="py-2 px-2 flex items-center justify-between hover:bg-shadow-secondary rounded transition-colors cursor-pointer">
          <span>Governança Corporativa</span>
          <i id="governanca-icon" class="fas fa-angle-down text-sm transition-transform duration-300"></i>
        </li>
        <ul id="submenu-governanca" class="hidden flex-col pl-4 space-y-1">
          <li>
            <a href="/src/pages/blog/posts/index.html?id=0" class="block py-2 px-2 text-sm hover:bg-shadow-secondary rounded transition-colors">Política de Privacidade - LGPD</a>
          </li>
          <li>
            <a href="/src/pages/blog/posts/index.html?id=1" class="block py-2 px-2 text-sm hover:bg-shadow-secondary rounded transition-colors">Relatório de Impacto à Proteção de Dados Pessoais (RIPD)</a>
          </li>
          <li>
            <a href="/src/pages/blog/posts/index.html?id=2" class="block py-2 px-2 text-sm hover:bg-shadow-secondary rounded transition-colors">Código de Conduta, Moral e Ética</a>
          </li>
        </ul>

        <li><a href="/src/pages/blog/index.html?v=2.0.0" class="block py-2 px-2 hover:bg-shadow-secondary rounded transition-colors">Blog</a></li>
        <li><a href="/src/pages/contact/index.html?v=2.0.0" class="block py-2 px-2 hover:bg-shadow-secondary rounded transition-colors">Contato</a></li>
      </ul>
    `;

    const btn = this.querySelector("#mobile-menu-button");
    const menu = this.querySelector("#mobile-menu");
    const icon = this.querySelector("#menu-icon");
    const solucoesToggle = this.querySelector("#solucoes-toggle");
    const submenuSolucoes = this.querySelector("#submenu-solucoes");
    const arrowSolucoes = this.querySelector("#solucoes-icon");
    const governancaToggle = this.querySelector("#governanca-toggle");
    const submenuGovernanca = this.querySelector("#submenu-governanca");
    const arrowGovernanca = this.querySelector("#governanca-icon");

    btn.addEventListener("click", () => {
      const isOpen = !menu.classList.contains("hidden");
      if (isOpen) {
        menu.classList.add("opacity-0", "-translate-y-2");
        setTimeout(() => menu.classList.add("hidden"), 300);
        icon.classList.replace("fa-times", "fa-bars");
      } else {
        menu.classList.remove("hidden");
        setTimeout(() => {
          menu.classList.remove("opacity-0", "-translate-y-2");
        }, 10);
        icon.classList.replace("fa-bars", "fa-times");
      }
    });

    solucoesToggle.addEventListener("click", () => {
      submenuSolucoes.classList.toggle("hidden");
      arrowSolucoes.classList.toggle("rotate-180");
    });

    governancaToggle.addEventListener("click", () => {
      submenuGovernanca.classList.toggle("hidden");
      arrowGovernanca.classList.toggle("rotate-180");
    });
  }
}

customElements.define("header-mobile", HeaderMobile);
