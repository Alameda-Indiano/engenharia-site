export class FooterCustom extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<footer class="w-full min-h-[300px] h-auto bg-secondary flex text-text-secondary items-center justify-evenly flex-wrap px-6 py-10">
  <div class="h-auto w-[200px] flex gap-4 flex-wrap">
    <h2 class="font-bold text-base">Capella Engenharia</h2>
    <div class="flex gap-10 font-light">
      <ul class="leading-7 space-y-1">
        <li>
          <a href="/index.html?v=2.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Home
            </span>
          </a>
        </li>
        <li>
          <a href="/src/pages/about/index.html?v=2.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Sobre
            </span>
          </a>
        </li>
        <li>
          <a href="/soluções" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Soluções
            </span>
          </a>
        </li>
      </ul>
      <ul class="leading-7 space-y-1">
        <li>
          <a href="/src/pages/blog/index.html?v=2.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Blog
            </span>
          </a>
        </li>
        <li>
          <a href="/src/pages/corporation/index.html?v=2.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Liderança Corporativa
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="h-auto flex flex-col gap-4 w-[200px] mt-6 sm:mt-0">
    <h2 class="font-bold text-base">Soluções</h2>
    <ul class="leading-7 space-y-1 font-light">
      <li>
        <a href="/src/pages/solutions/civil/index.html?v=2.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Obra Industrial Civil
          </span>
        </a>
      </li>
      <li>
        <a href="/src/pages/solutions/industrial/index.html?v=2.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Instalações Industriais
          </span>
        </a>
      </li>
      <li>
        <a href="/src/pages/solutions/projects/index.html?v=2.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Projetos de Engenharia
          </span>
        </a>
      </li>
    </ul>
  </div>

  <div class="h-auto flex flex-col gap-4 w-[200px] mt-6 sm:mt-0">
    <h2 class="font-bold text-base">Políticas</h2>
    <ul class="leading-7 space-y-1 font-light">
      <li>
        <a href="#" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Política de Cookies
          </span>
        </a>
      </li>
      <li>
        <a href="#" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Política de Privacidade
          </span>
        </a>
      </li>
      <li>
        <a href="#" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Termos de uso
          </span>
        </a>
      </li>
    </ul>
  </div>

  <div class="h-auto flex flex-col gap-4 w-[200px] mt-6 sm:mt-0">
    <h2 class="font-bold text-base">Contatos</h2>
    <ul class="leading-7 space-y-1 font-light">
      <li>
        <a href="#" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Contato.adm@capellaeng.com.br
          </span>
        </a>
      </li>
      <li>
        <a href="#" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
           (11) 9 1728-4800
          </span>
        </a>
      </li>
      <li>
        <a href="#" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
           Avenida Paulista, 1471 | Conj. 511 | Sala 02          </span>
        </a>
      </li>
    </ul>
      <a href="https://www.linkedin.com/company/capella-solu%C3%A7%C3%B5es-em-engenharia/posts/?feedView=all&viewAsMember=true" class="transition-transform duration-300 hover:scale-110">
        <img src="/public/images/icons/linkedin.svg?v=2.0.0" alt="LinkedIn" class="w-6 h-6" />
      </a>
    </div>
  </div>
</footer>

<div class="w-full bg-primary py-2 text-center text-sm text-text-primary">
  Copyright © 2025 Capella Engenharia, All rights reserved.
</div>
    `;
	}
}

customElements.define("custom-footer", FooterCustom);
