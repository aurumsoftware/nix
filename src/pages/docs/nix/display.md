---
title: "Display"
layout: "guide"
weight: 2
---

<article id="1">

## display

| CLASS        | DESCRIPTION                                |
| :------------| :----------------------------------------- |
| `.nix-display_none` | The element is completely removed	|
| `.nix-display_inline` | Displays an element as an inline element. Any height and width properties will have no effect |
| `.nix-display_inline-block` | Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values |
| `.nix-display_block` | Displays an element as a block element. It starts on a new line, and takes up the whole width |
| `.nix-display_table` | Let the element behave like a table element |
| `.nix-display_table-cell` | Let the element behave like a td element |
| `.nix-display_table-row` | Let the element behave like a tr element |
| `.nix-display_flex` | Displays an element as a block-level flex container |
| `.nix-display_inline-flex` | Displays an element as an inline-level flex container |

```xml
<div class="nix-display_flex"></div>
```

</article>
<article id="2">

## Responsive example

| CLASS        | DESCRIPTION                                              |
| :------------| :------------------------------------------------------- |
| `.nix-display_none--xs`  | `--xs` suffix only affects device widths of 768px and lower. |
| `.nix-display_block--sm`  | `--sm` suffix only affects device widths of 1024px and lower. |
| `.nix-display_flex--md`  | `--md` suffix only affects device widths of 1200px and lower. |

</article>
