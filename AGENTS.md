<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep user-selected brand images in public/brand with root-relative URLs so they remain portable to the user's external hosting.

- Define service metadata and gallery mappings in src/data/services.ts; both homepage cards and service detail routes consume it to keep destinations and photos consistent.
- Use /servicii/$serviceId for service galleries and /materiale for existing brands and films; keep homepage-only sections on / and use router links with hashes for returning to them.
