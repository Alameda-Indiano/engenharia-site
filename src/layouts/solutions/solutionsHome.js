export class ImageTextSection extends HTMLElement {
  connectedCallback() {
    const imgSrc = this.getAttribute("img-src");
    const text = this.getAttribute("text");

    this.innerHTML = `
    <section>
      <div class="flex flex-col lg:flex-row w-full ">
        <div class="w-full lg:w-1/2 px-28 flex items-center justify-center">
          <div class="text-left">
            <h2 class="xl:text-[50px] text-[35px] font-[900] text-text-primary mb-2">${text}</h2>
            <hr class="w-16 h-1 bg-text-details"/>
          </div>
        </div>
        <div class="w-full lg:w-[80%] h-auto lg:h-[560px]">
          <img
            src="${imgSrc}"
            alt="${text}"
            class="w-full h-full object-cover"
          />
          
        </div>
      </div>
            <div class="w-full h-[3px] bg-text-details"></div>

      </section>
      
    `;
  }
}

customElements.define("image-text-section", ImageTextSection);
