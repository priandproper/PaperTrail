# ReadMe*

*a public record of what I'm feeding my brain.*

A personal reading room — books, articles, Substacks, podcasts, essays,
anything knowledge-shaped. Three rooms:

- **Now** — what I'm currently reading / listening to
- **The Queue** — everything that earned a spot, with one honest line on why
- **Retold** — finished things, explained in my own spoken voice, like I would
  at dinner. If I can't write that paragraph, I skimmed.

## How I add things

Open [`add.html`](add.html) in a browser (or locally), fill in the form,
copy the generated entry, and paste it at the **top** of the list in
[`reads.js`](reads.js). That file is the whole database — plain text,
no build step, nothing to break.

When I finish something, I change its `status` to `"done"`, set the
`finished` date, and write the `retelling`.

## Run locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Why

I gave up reading for a while and could feel it — in my thinking and in my
talking. This is the reversal: new pathways, on purpose.
