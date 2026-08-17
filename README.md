# PaperTrail*

*a paper trail of what I'm feeding my brain.*

A personal reading room, live at
[priandproper.github.io/PaperTrail](https://priandproper.github.io/PaperTrail/).
Books, essays, podcasts, videos — anything knowledge-shaped. Three rooms:

- **Now** — what I'm currently reading / listening to
- **The Queue** — everything that earned a spot, with one honest line on why
- **What it did to my mind** — finished things, explained in my own words,
  with a shelf of everything that made it through. If I can't write that
  paragraph, I skimmed.

## How I add things

Open the [add page](https://priandproper.github.io/PaperTrail/add.html), fill
in the form, copy the generated entry, and paste it at the **top** of the list
in [`reads.js`](reads.js). That file is the whole database — plain text, no
build step, nothing to break.

When I finish something, the **"i finished this"** button on its card walks me
through the rating and the retelling, then generates the updated entry to
commit.

## Run locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Why

An avid reader's ledger. Everything that enters my head gets logged, and
everything I finish gets explained back in my own words — new pathways,
on purpose.
