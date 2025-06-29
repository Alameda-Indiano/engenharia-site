import "/src/components/buttons/buttomGradient.js?v=5.0.0";
import "/src/layouts/headerLayout/layout.js?v=5.0.0";

(async () => {
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");
  const index = Number(idParam);
  if (idParam === null || isNaN(index) || index < 0) return;

  try {
    // 1) carrega o array de posts
    const res = await fetch("/public/config/blog/blogSection.json?v=5.0.0");
    const posts = await res.json();
    if (!Array.isArray(posts) || index >= posts.length) return;
    const post = posts[index];

    // 2) popula título, imagem e meta
    document.title = `Capella Engenharia – ${post.title}`;
    document.querySelector("#hero-image").src = post.image;
    document.querySelector("#post-title").textContent = post.title;
    document.querySelector("#post-meta").textContent =
      `Capella Engenharia | ${post.post.date}`;

    // 3) resolve o caminho do HTML de publication
    let pubPath = post.post.publication; // ex: "./publication/policies.html"
    // Se vier relativo, resolve em relação à pasta do JSON:
    const jsonFolder = "/public/config/blog/";
    if (pubPath.startsWith("./") || pubPath.startsWith("../")) {
      pubPath = new URL(pubPath, location.origin + jsonFolder).pathname;
    }

    // 4) carrega o HTML de publication
    const contentDiv = document.querySelector("#post-content");
    const htmlRes = await fetch(pubPath + "?v=5.0.0");
    if (!htmlRes.ok)
      throw new Error(`Não foi possível carregar o HTML em ${pubPath}`);
    const htmlText = await htmlRes.text();

    // 5) injeta o HTML pronto
    contentDiv.innerHTML = htmlText;
  } catch (err) {
    console.error("Erro ao carregar conteúdo:", err);
    const contentDiv = document.querySelector("#post-content");
    if (contentDiv) {
      contentDiv.innerHTML = `<p class="text-center text-red-500">Erro ao carregar o conteúdo.</p>`;
    }
  }
})();
