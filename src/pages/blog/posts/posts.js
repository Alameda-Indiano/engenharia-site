import "/src/layouts/headerLayout/layout.js";
import "/src/components/buttons/buttomGradient.js";

(async () => {
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");
  const index = Number(idParam);

  if (idParam === null || isNaN(index) || index < 0) return;

  try {
    const res = await fetch("/public/config/blog/blogSection.json");
    const posts = await res.json();
    if (!Array.isArray(posts) || index >= posts.length) return;

    const post = posts[index];
    document.title = `Capella Engenharia – ${post.title}`;

    const heroImg = document.querySelector("#hero-image");
    heroImg.src = post.image;

    const titleEl = document.querySelector("#post-title");
    titleEl.textContent = post.title;

    const metaEl = document.querySelector("#post-meta");
    metaEl.textContent = `Capella Engenharia | ${post.post.date || ""}`;

    const contentDiv = document.querySelector("#post-content");
    const fullText = post.post.publication || "";

    const paragrafos = fullText.split(/\r?\n\r?\n/);

    contentDiv.innerHTML = paragrafos.map((p) => `<p>${p.trim()}</p>`).join("");
  } catch (err) {
    console.error("Erro ao carregar JSON:", err);
  }
})();
