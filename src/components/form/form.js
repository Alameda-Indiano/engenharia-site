class ContactForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="flex flex-col items-center w-full px-4">
        <div class="flex flex-col gap-10 w-full max-w-md">
          <div>
            <input
              id="name"
              type="text"
              placeholder="Nome completo"
              class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p id="error-name" class="text-red-500 text-sm mt-1 hidden">
              Por favor, preencha seu nome.
            </p>
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p id="error-email" class="text-red-500 text-sm mt-1 hidden">
              Digite um e-mail válido.
            </p>
          </div>
          <div>
            <input
              id="phone"
              type="tel"
              placeholder="Telefone"
              class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p id="error-phone" class="text-red-500 text-sm mt-1 hidden">
              Por favor, preencha seu telefone.
            </p>
          </div>
          <div>
            <textarea
              id="subject"
              placeholder="Assunto"
              class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <p id="error-subject" class="text-red-500 text-sm mt-1 hidden">
              Por favor, escreva o assunto.
            </p>
          </div>
          <div class="flex justify-center mt-2">
            <button-gradient text="Enviar"></button-gradient>
          </div>
        </div>
      </div>
    `;
    const btnGradient = this.querySelector("button-gradient");
    btnGradient.addEventListener("click", () => this._handleSubmit());
  }

  _handleSubmit() {
    this._clearErrors();

    const nameEl = this.querySelector("#name");
    const emailEl = this.querySelector("#email");
    const phoneEl = this.querySelector("#phone");
    const subjectEl = this.querySelector("#subject");

    let valid = true;

    if (!nameEl.value.trim()) {
      valid = false;
      nameEl.classList.add("border-red-500");
      this.querySelector("#error-name").classList.remove("hidden");
    }

    const emailValue = emailEl.value.trim();
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailValue || !emailRegex.test(emailValue)) {
      valid = false;
      emailEl.classList.add("border-red-500");
      this.querySelector("#error-email").classList.remove("hidden");
    }

    if (!phoneEl.value.trim()) {
      valid = false;
      phoneEl.classList.add("border-red-500");
      this.querySelector("#error-phone").classList.remove("hidden");
    }

    if (!subjectEl.value.trim()) {
      valid = false;
      subjectEl.classList.add("border-red-500");
      this.querySelector("#error-subject").classList.remove("hidden");
    }

    if (valid) {
      const nome = encodeURIComponent(nameEl.value.trim());
      const email = encodeURIComponent(emailEl.value.trim());
      const fone = encodeURIComponent(phoneEl.value.trim());
      const assunto = encodeURIComponent(subjectEl.value.trim());

      const numeroDestino = "5511987166725";

      const mensagem = `
*Novo contato via site*%0A
*Nome:* ${nome}%0A
*Email:* ${email}%0A
*Telefone:* ${fone}%0A
*Assunto:* ${assunto}
      `.trim();

      const link = `https://wa.me/${numeroDestino}?text=${mensagem}`;

      window.open(link, "_blank");

      nameEl.value = "";
      emailEl.value = "";
      phoneEl.value = "";
      subjectEl.value = "";
    }
  }

  _clearErrors() {
    const fields = ["name", "email", "phone", "subject"];
    fields.forEach((field) => {
      const inputEl = this.querySelector(`#${field}`);
      const errEl = this.querySelector(`#error-${field}`);
      inputEl.classList.remove("border-red-500");
      errEl.classList.add("hidden");
    });
  }
}

customElements.define("contact-form", ContactForm);
