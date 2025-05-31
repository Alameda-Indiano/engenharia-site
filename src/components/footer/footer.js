export class FooterCustom extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<footer class="w-full min-h-[300px] h-auto bg-secondary flex text-text-secondary items-center justify-evenly flex-wrap px-6 py-10">
  <div class="h-auto w-[200px] flex gap-4 flex-wrap">
    <h2 class="font-bold text-base">Capella Engenharia</h2>
    <div class="flex gap-10 font-light">
      <ul class="leading-7 space-y-1">
        <li>
          <a href="/home" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Home
            </span>
          </a>
        </li>
        <li>
          <a href="/sobre" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
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
          <a href="/blog" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Blog
            </span>
          </a>
        </li>
        <li>
          <a href="/clientes" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Clientes
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
        <a href="#" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Obra Industrial Civil
          </span>
        </a>
      </li>
      <li>
        <a href="#" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Instalações Industriais
          </span>
        </a>
      </li>
      <li>
        <a href="#" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
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
            Obra Industrial Civil
          </span>
        </a>
      </li>
      <li>
        <a href="#" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Instalações Industriais
          </span>
        </a>
      </li>
      <li>
        <a href="#" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Projetos de Engenharia
          </span>
        </a>
      </li>
    </ul>
      <a href="#" class="transition-transform duration-300 hover:scale-110">
        <img src="public/images/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
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
