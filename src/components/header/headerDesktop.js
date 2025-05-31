export class HeaderCustom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="w-full py-2 px-14 bg-header-primary hidden lg:flex justify-between items-center fixed top-0 left-0 z-50">
        <div id="logo-link" class="cursor-pointer">
          <img
            id="logo-img"
            src="/public/images/png/logo.png"
            width="70"
            alt="Logotipo Capella Engenharia"
          />
        </div>

        <div class="flex items-center space-x-8">
          <ul class="flex gap-14 items-center font-[600] text-sm text-text-primary">
            <li class="relative group">
              <a href="/index.html" class="transition-colors duration-300 group-hover:text-text-details">Home</a>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li class="relative group cursor-pointer">
              <a href="/src/pages/about/index.html" class="transition-colors duration-300 group-hover:text-text-details">
                Sobre
              </a>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li id="solucoes-menu" class="relative group cursor-pointer">
              <div class="flex items-center gap-2 transition-colors duration-300 group-hover:text-text-details">
                Soluções
                <i class="fas fa-angle-down transition duration-300"></i>
              </div>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
              <ul
                id="sub-menu-solucoes"
                class="absolute left-0 top-full mt-2 hidden flex-col bg-secondary text-text-secondary rounded-b-md shadow-lg py-4 px-6 w-72 z-50 text-left space-y-3"
              >
                <li class="flex items-center gap-2 before:content-['•'] before:text-white before:text-lg before:leading-none">
                  <a href="/src/pages/solutions/civil/index.html" class="hover:text-text-details transition-colors duration-300 font-medium">
                    Obra Industrial Civil
                  </a>
                </li>
                <li class="flex items-center gap-2 before:content-['•'] before:text-white before:text-lg before:leading-none">
                  <a href="/src/pages/solutions/industrial/index.html" class="hover:text-text-details transition-colors duration-300 font-medium">
                    Instalações Industriais
                  </a>
                </li>
                <li class="flex items-center gap-2 before:content-['•'] before:text-white before:text-lg before:leading-none">
                  <a href="/src/pages/solutions/projects/index.html" class="hover:text-text-details transition-colors duration-300 font-medium">
                    Projetos de Engenharia
                  </a>
                </li>
              </ul>
            </li>
            <li class="relative group cursor-pointer">
              <a href="/src/pages/blog/index.html" class="transition-colors duration-300 group-hover:text-text-details">Blog</a>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li class="relative group cursor-pointer">
              <a href="/src/pages/contact/index.html" class="transition-colors duration-300 group-hover:text-text-details">Contato</a>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li class="relative group cursor-pointer">
              <a href="/src/pages/corporation/index.html" class="transition-colors duration-300 group-hover:text-text-details">Governança Corporativa</a>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-text-details transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          <a
            href="#"
            class="cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            <img
              class="w-6 h-6"
              src="/public/images/icons/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
      </header>
    `;

    const liSolucoes = this.querySelector("#solucoes-menu");
    const submenu = this.querySelector("#sub-menu-solucoes");
    liSolucoes.addEventListener("mouseenter", () => {
      submenu.classList.remove("hidden");
      submenu.classList.add("flex");
    });
    liSolucoes.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!liSolucoes.matches(":hover") && !submenu.matches(":hover")) {
          submenu.classList.add("hidden");
          submenu.classList.remove("flex");
        }
      }, 100);
    });
    submenu.addEventListener("mouseenter", () => {
      submenu.classList.remove("hidden");
      submenu.classList.add("flex");
    });
    submenu.addEventListener("mouseleave", () => {
      submenu.classList.add("hidden");
      submenu.classList.remove("flex");
    });

    const logoLink = this.querySelector("#logo-link");
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.reload();
    });
  }
}

customElements.define("header-desktop", HeaderCustom);
