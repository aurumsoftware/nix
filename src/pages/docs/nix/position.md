---
title: "Position"
layout: "guide"
weight: 8
---

<article id="1">

## position

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-position_relative`  | The element is positioned relative to its normal position |
| `.nix-padding_absolute`  | The element is positioned relative to its first positioned (not static) ancestor element |
| `.nix-padding_fixed` | The element is positioned relative to the browser window |
| `.nix-padding_static`   | Default value. Elements render in order, as they appear in the document flow |
| `.nix-padding_sticky`| The element is positioned based on the user's scroll position |

```xml
<div class="nix-padding-top_5"></div>
```

</article>
<article id="2">

## Responsive example

| CLASS        | DESCRIPTION                                              |
| :------------| :------------------------------------------------------- |
| `.nix-position_relative--xs`  | `--xs` suffix only affects device widths of 768px and lower. |
| `.nix-padding_absolute--sm`  | `--sm` suffix only affects device widths of 1024px and lower. |
| `.nix-padding_fixed--md`  | `--md` suffix only affects device widths of 1200px and lower. |

</article>
