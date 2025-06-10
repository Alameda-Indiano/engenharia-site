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

    document.querySelector("#hero-image").src = post.image;
    document.querySelector("#post-title").textContent = post.title;
    document.querySelector("#post-meta").textContent = `Capella Engenharia | ${
      post.post.date || ""
    }`;

    const contentDiv = document.querySelector("#post-content");
    const { publication } = post.post;
    const blocos = Array.isArray(publication)
      ? publication
      : publication.split(/\r?\n\r?\n/);

    const renderBlock = (bloco) => {
      const linhas = bloco.trim().split(/\r?\n/);
      let html = "";
      let listBuffer = [];

      const flushList = () => {
        if (!listBuffer.length) return;
        html += `
<ul class="list-disc list-inside pl-6 my-4">
  ${listBuffer.map((item) => `<li class="mb-2">${item.trim()}</li>`).join("")}
</ul>
`;
        listBuffer = [];
      };

      for (let ln of linhas) {
        if (/^\s*-\s*/.test(ln)) {
          listBuffer.push(ln.replace(/^\s*-\s*/, ""));
        } else {
          flushList();
          if (ln.trim()) {
            html += `<p class="my-4">${ln.trim()}</p>`;
          }
        }
      }
      flushList();
      return html;
    };

    contentDiv.innerHTML = blocos.map(renderBlock).join("");
  } catch (err) {
    console.error("Erro ao carregar JSON:", err);
  }
})();
