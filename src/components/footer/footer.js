export class FooterCustom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="w-full min-h-[300px] h-auto bg-secondary flex text-text-secondary items-center justify-evenly flex-wrap px-6 py-10">
  <div class="h-auto w-[200px] flex gap-4 flex-wrap">
    <h2 class="font-bold text-base">Capella Engenharia</h2>
    <div class="flex gap-10 font-light">
      <ul class="leading-7 space-y-1">
        <li>
          <a href="/index.html?v=6.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Home
            </span>
          </a>
        </li>
        <li>
          <a href="/src/pages/about/index.html?v=6.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Sobre
            </span>
          </a>
        </li>
         
      </ul>
      <ul class="leading-7 space-y-1">
        <li>
          <a href="/src/pages/blog/index.html?v=6.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Blog
            </span>
          </a>
        </li>
        <li>
          <a href="/src/pages/contact/index.html?v=6.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
            <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
              Contato
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="h-auto flex flex-col gap-4 w-[300px] mt-6 sm:mt-0">
    <h2 class="font-bold text-base">Soluções</h2>
    <ul class="leading-7 space-y-1 font-light">
      <li>
        <a href="/src/pages/solutions/industrial/index.html?v=6.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Guia Básico das Instalações Industriais
          </span>
        </a>
      </li>
      <li>
        <a href="/src/pages/solutions/projects/index.html?v=6.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Guia Básico de Projetos de Engenharia
          </span>
        </a>
      </li>
      <li>
        <a href="/src/pages/solutions/civil/index.html?v=6.0.0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
           Guia Básico de Industria Civil 
          </span>
        </a>
      </li>
    </ul>
  </div>

  <div class="h-auto flex flex-col gap-4 w-[250px] mt-6 sm:mt-0">
    <h2 class="font-bold text-base">Políticas</h2>
    <ul class="leading-7 space-y-1 font-light">
    <li>
        <a href="/src/pages/blog/posts/index.html?id=0" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Política de Privacidade
          </span>
        </a>
      </li>
      <li>
        <a href="/src/pages/blog/posts/index.html?id=1" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
            Relatório de Impacto à Proteção de Dados Pessoais (RIPD)
          </span>
        </a>
      </li>
      
      <li>
        <a href="/src/pages/blog/posts/index.html?id=2" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
           Código de Conduta, Moral e Ética
          </span>
        </a>
      </li>
    </ul>
  </div>

  <div class="h-auto flex flex-col gap-4 w-[200px] mt-6 sm:mt-0">
    <h2 class="font-bold text-base">Contatos</h2>
    <ul class="leading-7 space-y-1 font-light">
     <li>
  <a
    target="_blank"
    href="https://mail.google.com/mail/?view=cm&fs=1&to=contato.adm@capellaeng.com.br&su=Quero%20falar%20com%20a%20Capella&body=Olá%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto."
    class="group"
  >
    <span
      class="relative transition-colors duration-300 group-hover:text-text-details
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full"
    >
      contato.adm@capellaeng.com.br
    </span>
  </a>
</li>

     <li>
  <a
    href="https://wa.me/5511917284800?text=Olá%2C%20quero%20falar%20com%20a%20Capella"
    target="_blank"
    class="group"
  >
    <span
      class="relative transition-colors duration-300 group-hover:text-text-details
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full"
    >
      (11) 9 1728-4800
    </span>
  </a>
</li>

        <a  href="https://www.google.com/maps?q=Avenida+Paulista,+1471,+Conj.+511,+Sala+02"
  target="_blank" class="group relative inline-block cursor-pointer transition-colors duration-300 hover:text-text-details">
          <span class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-text-details after:transition-all after:duration-300 group-hover:after:w-full">
           Avenida Paulista, 1471 | Conj. 511 | Sala 02          </span>
        </a>
      </li>
    </ul>
      <div class="flex gap-4">
      <a href="https://www.linkedin.com/company/capella-solu%C3%A7%C3%B5es-em-engenharia/posts/?feedView=all&viewAsMember=true" class="transition-transform duration-300 hover:scale-110">
        <img src="/public/images/icons/linkedin.svg?v=6.0.0" alt="LinkedIn" class="w-6 h-6" />
      </a>
      <a href="https://www.instagram.com/capella.eng?utm_source=qr&igsh=ZWd2ZXVmaGVwMzl6" class="transition-transform duration-300 hover:scale-110">
        <img src="/public/images/icons/instagram.svg?v=6.0.0" alt="LinkedIn" class="w-6 h-6" />
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
