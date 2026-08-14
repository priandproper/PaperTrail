// ReadMe — render the ledger

const TYPE_LABELS = {
  book: "book",
  essay: "essay",
  podcast: "podcast",
  video: "video",
};

let activeFilter = "all";

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s ?? "";
  return d.innerHTML;
}

function typePill(type) {
  const label = TYPE_LABELS[type] || type;
  return `<span class="pill pill-type type-${esc(type)}">${esc(label)}</span>`;
}

function titleHtml(r) {
  return r.link
    ? `<a href="${esc(r.link)}" target="_blank" rel="noopener">${esc(r.title)}<span class="ext">↗</span></a>`
    : esc(r.title);
}

function prettyDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    .toLowerCase();
}

function coverHtml(r) {
  if (!r.cover) return "";
  return `<img class="cover" src="${esc(r.cover)}" alt="" loading="lazy"
    onerror="this.remove()">`;
}

function starsHtml(rating) {
  if (!rating) return "";
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return `<span class="stars"><span class="full">${"★".repeat(full)}${half ? "½" : ""}</span>${"☆".repeat(empty)}</span>`;
}

function cardBody(r) {
  return `<div class="card-body">
    ${coverHtml(r)}
    <div class="card-text">
      <h3>${titleHtml(r)}</h3>
      ${r.by ? `<p class="by">${esc(r.by)}</p>` : ""}
      ${r.why ? `<p class="why">${esc(r.why)}</p>` : ""}
    </div>
  </div>`;
}

function card(r, annoText) {
  return `<article class="card">
    <div class="card-top">
      ${typePill(r.type)}
      <span class="anno">(${esc(annoText)})</span>
    </div>
    ${cardBody(r)}
  </article>`;
}

function doneCard(r) {
  const quotes = (r.quotes || [])
    .map((q) => `<p class="quote">“${esc(q)}”</p>`)
    .join("");
  return `<article class="card">
    <div class="card-top">
      ${typePill(r.type)}
      <span class="anno">(finished ${esc(prettyDate(r.finished))})</span>
    </div>
    ${cardBody(r)}
    ${starsHtml(r.rating)}
    ${
      r.retelling
        ? `<div class="retelling">
            <span class="retelling-label">AS TOLD AT DINNER</span>
            <p class="retelling-text">${esc(r.retelling)}</p>
          </div>`
        : ""
    }
    ${quotes}
  </article>`;
}

function emptyState(text) {
  return `<div class="empty">(${esc(text)})</div>`;
}

function renderNow() {
  const items = READS.filter((r) => r.status === "now");
  document.getElementById("now-cards").innerHTML = items.length
    ? items.map((r) => card(r, `started ${prettyDate(r.added)}`)).join("")
    : emptyState("nothing in progress — the nightstand is bare, fix that");
}

function renderQueue() {
  let items = READS.filter((r) => r.status === "queue");
  if (activeFilter !== "all") items = items.filter((r) => r.type === activeFilter);
  items = [...items].sort((a, b) => (b.added || "").localeCompare(a.added || ""));
  document.getElementById("queue-cards").innerHTML = items.length
    ? items.map((r) => card(r, `added ${prettyDate(r.added)}`)).join("")
    : emptyState("queue is empty — go find something worth your neurons");
}

function renderRetold() {
  const items = [...READS.filter((r) => r.status === "done")].sort((a, b) =>
    (b.finished || "").localeCompare(a.finished || "")
  );
  document.getElementById("retold-cards").innerHTML = items.length
    ? items.map(doneCard).join("")
    : emptyState("nothing retold yet — finish something, then tell me about it");
}

function renderFilters() {
  const typesInQueue = [...new Set(READS.filter((r) => r.status === "queue").map((r) => r.type))];
  const chips = ["all", ...typesInQueue];
  const el = document.getElementById("filters");
  el.innerHTML = chips
    .map(
      (t) =>
        `<button class="chip${t === activeFilter ? " active" : ""}" data-type="${esc(t)}">${esc(
          t === "all" ? "everything" : TYPE_LABELS[t] || t
        )}</button>`
    )
    .join("");
  el.querySelectorAll(".chip").forEach((btn) =>
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.type;
      renderFilters();
      renderQueue();
    })
  );
}

renderNow();
renderFilters();
renderQueue();
renderRetold();
