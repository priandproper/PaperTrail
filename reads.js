// ═══════════════════════════════════════════════════════════════
//  PaperTrail — the ledger.
//  Add new entries at the TOP of the list (or use add.html to
//  generate one). Fields:
//    title    — what it's called
//    by       — author / host / publication
//    type     — "book" | "essay" (any short read) | "podcast" | "video"
//    status   — "queue" (want to read) | "now" (currently reading) | "done" (finished)
//    link     — optional URL ("" if none)
//    cover    — optional cover image URL ("" if none).
//               tip: https://covers.openlibrary.org/b/isbn/<ISBN>-M.jpg
//    why      — one honest line on why it earned a spot, in (parentheses)
//    added    — date it entered the ledger, YYYY-MM-DD
//    finished — date finished ("" until then)
//    rating   — 0–5, halves allowed (only for finished things)
//    retelling— for finished things: what it did to your mind, in your own words
//    quotes   — lines worth keeping (empty [] is fine)
// ═══════════════════════════════════════════════════════════════

const READS = [

  // ─── now ───
  {
    title: "The Denial of Death",
    by: "Ernest Becker",
    type: "book",
    status: "now",
    link: "",
    cover: "covers/9780684832401.jpg",
    why: "(the pulitzer winner about the one fact we're all politely ignoring)",
    added: "2026-08-14",
    finished: "",
    rating: 0,
    retelling: "",
    quotes: []
  },
  {
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    by: "Gabrielle Zevin",
    type: "book",
    status: "now",
    link: "",
    cover: "covers/9780593321201.jpg",
    why: "(everyone says it's about video games; apparently it's about love and work)",
    added: "2026-08-14",
    finished: "",
    rating: 0,
    retelling: "",
    quotes: []
  },
  {
    title: "Mother Mary Comes to Me",
    by: "Arundhati Roy",
    type: "book",
    status: "now",
    link: "",
    cover: "covers/9781668094716.jpg",
    why: "(roy on the mother who made her — fierce woman, fiercer daughter)",
    added: "2026-08-14",
    finished: "",
    rating: 0,
    retelling: "",
    quotes: []
  },

  // ─── the queue ───
  {
    title: "Looking for Alice",
    by: "Henrik Karlsson",
    type: "essay",
    status: "queue",
    link: "https://www.henrikkarlsson.xyz/p/looking-for-alice",
    cover: "",
    why: "(an essay about searching for a person the way you'd search for an idea)",
    added: "2026-08-14",
    finished: "",
    rating: 0,
    retelling: "",
    quotes: []
  },
  {
    title: "You Might Be a Late Bloomer",
    by: "David Brooks · The Atlantic",
    type: "essay",
    status: "queue",
    link: "https://www.theatlantic.com/ideas/archive/2024/06/successs-late-bloomers-motivation/678798/",
    cover: "",
    why: "(david brooks making the case that it's not too late — for anything)",
    added: "2026-08-14",
    finished: "",
    rating: 0,
    retelling: "",
    quotes: []
  },
  {
    title: "The Creative Act: A Way of Being",
    by: "Rick Rubin",
    type: "book",
    status: "queue",
    link: "",
    cover: "covers/9780593652886.jpg",
    why: "(rick rubin on making things — no instrument required)",
    added: "2026-08-14",
    finished: "",
    rating: 0,
    retelling: "",
    quotes: []
  },
  {
    title: "Kitchen Confidential",
    by: "Anthony Bourdain",
    type: "book",
    status: "queue",
    link: "",
    cover: "covers/9780060899226.jpg",
    why: "(bourdain's kitchen underbelly — appetite as a worldview)",
    added: "2026-08-14",
    finished: "",
    rating: 0,
    retelling: "",
    quotes: []
  }

];
