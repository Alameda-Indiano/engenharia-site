// src/components/header/headerMobile.js
export class HeaderMobile extends HTMLElement {
  connectedCallback() {
    this.className = "w-full fixed top-0 left-0 z-50 lg:hidden";

    this.innerHTML = `
      <div class="w-full bg-header-primary text-text-primary px-6 py-2 min-h-16">
        <div class="max-w-screen-xl mx-auto flex justify-between items-center">
          <img
            src="/images/png/logo.png"
            width="70"
            alt="Logo Capella"
          />
          <button id="mobile-menu-button" class="text-xl">
            <i id="menu-icon" class="fas fa-bars transition duration-300 ease-in-out"></i>
          </button>
        </div>
      </div>

      <ul id="mobile-menu"
        class="hidden flex-col bg-secondary text-text-secondary px-6 py-6 font-semibold text-base absolute w-full top-full left-0 z-40 transition-all duration-300 ease-in-out opacity-0 translate-y-[-10px] space-y-2 shadow-lg">

        <li><a href="#" class="block py-2 px-2 hover:bg-shadow-secondary rounded transition-colors">Home</a></li>
        <li><a href="#" class="block py-2 px-2 hover:bg-shadow-secondary rounded transition-colors">Sobre</a></li>

        <li id="solucoes-toggle" class="py-2 px-2 cursor-pointer flex items-center justify-between hover:bg-shadow-secondary rounded transition-colors">
          <span>Soluções</span>
          <i id="solucoes-icon" class="fas fa-angle-down text-sm transition-transform duration-300"></i>
        </li>

        <ul id="submenu-solucoes" class="hidden flex-col pl-4 space-y-1">
          <li>
            <a href="/src/pages/solutions/civil/index.html" class="block py-2 px-2 text-sm hover:bg-shadow-secondary rounded transition-colors">Obra Industrial Civil</a>
          </li>
          <li>
            <a href="/src/pages/solutions/industrial/index.html" class="block py-2 px-2 text-sm hover:bg-shadow-secondary rounded transition-colors">Instalações Industriais</a>
          </li>
          <li>
            <a href="/src/pages/solutions/projects/index.html" class="block py-2 px-2 text-sm hover:bg-shadow-secondary rounded transition-colors">Projetos de Engenharia</a>
          </li>
        </ul>

        <li><a href="#" class="block py-2 px-2 hover:bg-shadow-secondary rounded transition-colors">Governança Corporativa</a></li>
        <li><a href="#" class="block py-2 px-2 hover:bg-shadow-secondary rounded transition-colors">Blog</a></li>
        <li><a href="#" class="block py-2 px-2 hover:bg-shadow-secondary rounded transition-colors">Contato</a></li>
      </ul>
    `;

    const btn = this.querySelector("#mobile-menu-button");
    const menu = this.querySelector("#mobile-menu");
    const icon = this.querySelector("#menu-icon");
    const solucoesToggle = this.querySelector("#solucoes-toggle");
    const submenu = this.querySelector("#submenu-solucoes");
    const arrow = this.querySelector("#solucoes-icon");

    btn.addEventListener("click", () => {
      const isOpen = !menu.classList.contains("hidden");

      if (isOpen) {
        menu.classList.add("opacity-0", "translate-y-[-10px]");
        setTimeout(() => menu.classList.add("hidden"), 300);
        icon.classList.replace("fa-times", "fa-bars");
      } else {
        menu.classList.remove("hidden");
        setTimeout(() => {
          menu.classList.remove("opacity-0", "translate-y-[-10px]");
        }, 10);
        icon.classList.replace("fa-bars", "fa-times");
      }
    });

    solucoesToggle?.addEventListener("click", () => {
      submenu?.classList.toggle("hidden");
      arrow?.classList.toggle("rotate-180");
    });
  }
}

customElements.define("header-mobile", HeaderMobile);
