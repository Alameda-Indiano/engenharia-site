export class HeaderCustom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="w-full py-2 px-14 bg-header-primary hidden lg:flex items-center fixed top-0 left-0 z-50">
        <div id="logo-link" class="cursor-pointer">
          <img
            id="logo-img"
            src="/public/images/logos/verticalLogoBlack.svg?v=6.0.0"
            width="64"
            alt="Logotipo Capella Engenharia"
          />
        </div>
        <nav class="flex-1">
          <ul class="flex justify-center gap-14 items-center font-[600] text-sm text-text-primary">
            <li class="relative group">
              <a href="/index.html?v=6.0.0" class="transition-colors duration-300 group-hover:text-text-details">Home</a>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li class="relative group cursor-pointer">
              <a href="/src/pages/about/index.html?v=6.0.0" class="transition-colors duration-300 group-hover:text-text-details">Sobre</a>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li id="solucoes-menu" class="relative group cursor-pointer">
              <div class="flex items-center gap-2 transition-colors duration-300 group-hover:text-text-details">
                Soluções
                <i class="fas fa-angle-down transition duration-300"></i>
              </div>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
              <ul id="sub-menu-solucoes" class="absolute left-0 top-full mt-2 hidden flex-col bg-secondary text-text-secondary rounded-b-md shadow-lg py-4 px-6 w-[350px] z-50 text-left space-y-3">
                <li class="flex items-center gap-2 before:content-['•'] before:text-white before:text-lg before:leading-none">
                  <a href="/src/pages/solutions/civil/index.html?v=6.0.0" class="hover:text-text-details transition-colors duration-300 font-medium">
                      Guia Básico de Industria Civil para Atuação da Capella Engenharia
                  </a>
                </li>
                <li class="flex items-center gap-2 before:content-['•'] before:text-white before:text-lg before:leading-none">
                  <a href="/src/pages/solutions/industrial/index.html?v=6.0.0" class="hover:text-text-details transition-colors duration-300 font-medium">
                      Guia Básico das Instalações Industriais para Atuação da Capella Engenharia
                  </a>
                </li>
                <li class="flex items-center gap-2 before:content-['•'] before:text-white before:text-lg before:leading-none">
                  <a href="/src/pages/solutions/projects/index.html?v=6.0.0" class="hover:text-text-details transition-colors duration-300 font-medium">
                      Guia Básico de Projetos de Engenharia para Atuação da Capella Engenharia
                  </a>
                </li>
              </ul>
            </li>
            <li id="governanca-menu" class="relative group cursor-pointer">
              <div class="flex items-center gap-2 transition-colors duration-300 group-hover:text-text-details">
                Governança Corporativa
                <i class="fas fa-angle-down transition duration-300"></i>
              </div>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
              <ul id="sub-menu-governanca" class="absolute left-0 top-full mt-2 hidden flex-col bg-secondary text-text-secondary rounded-b-md shadow-lg py-4 px-6 w-72 z-50 text-left space-y-3">
                <li class="flex items-center gap-2 before:content-['•'] before:text-white before:text-lg before:leading-none">
                  <a href="/src/pages/blog/posts/index.html?id=0&v=6.0.0" class="hover:text-text-details transition-colors duration-300 font-medium">
                    Política de Privacidade - LGPD
                  </a>
                </li>
                <li class="flex items-center gap-2 before:content-['•'] before:text-white before:text-lg before:leading-none">
                  <a href="/src/pages/blog/posts/index.html?id=1&v=6.0.0" class="hover:text-text-details transition-colors duration-300 font-medium">
                    Relatório de Impacto à Proteção de Dados Pessoais (RIPD)
                  </a>
                </li>
                 <li class="flex items-center gap-2 before:content-['•'] before:text-white before:text-lg before:leading-none">
                  <a href="/src/pages/blog/posts/index.html?id=2" class="hover:text-text-details transition-colors duration-300 font-medium">
                   Código de Conduta, Moral e Ética
                  </a>
                </li>
              </ul>
            </li>
            <li class="relative group cursor-pointer">
              <a href="/src/pages/blog/index.html?v=6.0.0" class="transition-colors duration-300 group-hover:text-text-details">Blog</a>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li class="relative group cursor-pointer">
              <a href="/src/pages/contact/index.html?v=6.0.0" class="transition-colors duration-300 group-hover:text-text-details">Contato</a>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/capella-solu%C3%A7%C3%B5es-em-engenharia/posts/?feedView=all&viewAsMember=true" class="transition-transform duration-300 hover:scale-110">
            <img class="w-6 h-6" src="/public/images/icons/linkedin.svg?v=6.0.0" alt="LinkedIn"/>
          </a>
          <a href="https://www.instagram.com/capella.eng?utm_source=qr&igsh=ZWd2ZXVmaGVwMzl6" class="transition-transform duration-300 hover:scale-110">
            <img class="w-6 h-6" src="/public/images/icons/instagram.svg?v=6.0.0" alt="Instagram"/>
          </a>
        </div>
      </header>
    `;

    const liSolucoes = this.querySelector("#solucoes-menu");
    const submenuSolucoes = this.querySelector("#sub-menu-solucoes");
    liSolucoes.addEventListener("mouseenter", () => {
      submenuSolucoes.classList.replace("hidden", "flex");
    });
    liSolucoes.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (
          !liSolucoes.matches(":hover") &&
          !submenuSolucoes.matches(":hover")
        ) {
          submenuSolucoes.classList.replace("flex", "hidden");
        }
      }, 100);
    });
    submenuSolucoes.addEventListener("mouseenter", () => {
      submenuSolucoes.classList.replace("hidden", "flex");
    });
    submenuSolucoes.addEventListener("mouseleave", () => {
      submenuSolucoes.classList.replace("flex", "hidden");
    });

    const liGov = this.querySelector("#governanca-menu");
    const submenuGov = this.querySelector("#sub-menu-governanca");
    liGov.addEventListener("mouseenter", () => {
      submenuGov.classList.replace("hidden", "flex");
    });
    liGov.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!liGov.matches(":hover") && !submenuGov.matches(":hover")) {
          submenuGov.classList.replace("flex", "hidden");
        }
      }, 100);
    });
    submenuGov.addEventListener("mouseenter", () => {
      submenuGov.classList.replace("hidden", "flex");
    });
    submenuGov.addEventListener("mouseleave", () => {
      submenuGov.classList.replace("flex", "hidden");
    });

    const logoLink = this.querySelector("#logo-link");
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.reload();
    });
  }
}

customElements.define("header-desktop", HeaderCustom);
