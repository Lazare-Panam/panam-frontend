## Confusion Log
- [ ] 2026-10-28 — Should a 3-family product category (SBB) with only ~13 heterogeneous SKUs mirror the full DBB structure or be simplified? Decided: mirror DBB (index + per-family self-contained pages) — src/components/SBB

## Concepts To Learn Next
- [ ] 2026-10-28 — Headless custom hooks (extracting `useFacetedFilter`) — each SBB family page now repeats ~90 lines of `applyFilters` / `countBy` / `useMemo` option-building (same as DBB). A single headless hook returning `{ models, options, counts, activeCount }` would keep each page reading like DBB while removing the copy-paste. Relevant because we just hand-duplicated that logic across Monoflange / Flange-to-Pipe / Block-and-Bleed.
