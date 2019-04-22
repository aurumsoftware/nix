---
title: "Float"
layout: "guide"
weight: 4
---

<article id="1">

## float

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-float_none`  | The element does not float, (will be displayed just where it occurs in the text). |
| `.nix-float_left` | The element floats to the left of its container |
| `.nix-float_right`   | The element floats the right of its container |

```xml
<div class="nix-float_left"></div>
```

</article>
<article id="2">

## clear

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-clear_none`  | Allows floating elements on both sides |
| `.nix-clear_both`  | No floating elements allowed on either the left or the right side |
| `.nix-clear_left` | No floating elements allowed on the left side |
| `.nix-clear_right`   | No floating elements allowed on the right side |

```xml
<div class="nix-clear_both"></div>
```

</article>
<article id="3">

## Responsive example

| CLASS        | DESCRIPTION                                              |
| :------------| :------------------------------------------------------- |
| `.nix-float_none--xs`  | `--xs` suffix only affects device widths of 768px and lower. |
| `.nix-clear_left--sm`  | `--sm` suffix only affects device widths of 1024px and lower. |
| `.nix-clear_right--md`  | `--md` suffix only affects device widths of 1200px and lower. |

</article>