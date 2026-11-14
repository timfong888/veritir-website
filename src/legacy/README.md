# Legacy site (unrouted)

The pre-redesign site (research-data marketplace positioning, `/faq`). Nothing
here is built or served: Astro only routes `src/pages`, and the content
collection only loads `src/data/pages`.

To revive a page, move it back into `src/pages` and its MDX into
`src/data/pages`. It depends on Tailwind (still installed) and on
`public/veritir_logo_wordmark_white.svg`, which was removed in the redesign
(restore it from git history).
