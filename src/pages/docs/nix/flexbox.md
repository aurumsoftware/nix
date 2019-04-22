---
title: "Flexbox"
layout: "guide"
weight: 3
---

<article id="2">

These properties require `display: flex` in the parent for working.

Learn flexbox with <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">this guide</a>.

## justify-content

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-justify-content_start`  | Items are positioned at the beginning of the container |
| `.nix-justify-content_end`  | Items are positioned at the end of the container |
| `.nix-justify-content_between`  | Items are positioned with space between the lines |
| `.nix-justify-content_around`  | Items are positioned with space before, between, and after the lines |
| `.nix-justify-content_center`  | Items are positioned at the center of the container |

```xml
<div class="nix-justify-content_center"></div>
```

</article>
<article id="3">

## align-item

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-align-items_stretch`  | Items are stretched to fit the container |
| `.nix-align-items_start`  | Items are positioned at the beginning of the container |
| `.nix-align-items_end`  | Items are positioned at the end of the container |
| `.nix-align-items_center`  | Items are positioned at the center of the container |
| `.nix-align-items_baseline`  | Items are positioned at the baseline of the container |

```xml
<div class="nix-align-items_center"></div>
```

</article>
<article id="4">

## align-content

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-align-content_stretch`  | Lines stretch to take up the remaining space |
| `.nix-align-content_start`  | Lines are packed toward the start of the flex container |
| `.nix-align-content_end`  | Lines are packed toward the end of the flex container |
| `.nix-align-content_center`  | Lines are packed toward the center of the flex container |
| `.nix-align-content_between`  | Lines are evenly distributed in the flex container |
| `.nix-align-content_arround`  | Lines are evenly distributed in the flex container, with half-size spaces on either end |

```xml
<div class="nix-align-content_center"></div>
```

</article>
<article id="5">

## align-self

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-align-self_stretch`  | The element is positioned to fit the container |
| `.nix-align-self_auto`  | The element inherits its parent container's align-items property, or "stretch" if it has no parent container |
| `.nix-align-self_start`  | The element is positioned at the beginning of the container |
| `.nix-align-self_end`  | The element is positioned at the end of the container |
| `.nix-align-self_center`  | The element is positioned at the center of the container |
| `.nix-align-self_baseline`  | The element is positioned at the baseline of the container |

```xml
<div class="nix-align-self_center"></div>
```

</article>
<article id="6">

## flex-direction

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-flex-direction_column`  | The flexible items are displayed vertically, as a column |
| `.nix-flex-direction_column-reverse`  | Same as column, but in reverse order |
| `.nix-flex-direction_row`  | The flexible items are displayed horizontally, as a row |
| `.nix-flex-direction_row-reverse`  | Same as row, but in reverse order |

```xml
<div class="nix-flex-direction_column"></div>
```

</article>
<article id="7">

## flex-wrap

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-flex-wrap_wrap`  | Specifies that the flexible items will wrap if necessary |
| `.nix-flex-wrap_nowrap`  | Specifies that the flexible items will not wrap |
| `.nix-flex-wrap_wrap-reverse`  | Specifies that the flexible items will wrap, if necessary, in reverse order |

```xml
<div class="nix-flex-wrap_wrap"></div>
```
</article>

<article id="8">

## flex

This defines the size of an element before the remaining space is distributed.

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-flex_auto`  | Defines an automatic size  |
| `.nix-flex_0`  | Defines a minimum size  |
| `.nix-flex_1`  | Defines all available space |

```xml
<div class="nix-flex_1"></div>
```
</article>

<article id="9">

## order

`order` defines the order of an element from 0 until 5.

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-order_0`  | Default |
| ...  | ... |
| `.nix-order_5`  |  |

```xml
<div class="nix-flex_1"></div>
```
</article>

<article id="10">

## Responsive example

| CLASS        | DESCRIPTION                                              |
| :------------| :------------------------------------------------------- |
| `.nix-align-items_center--xs`  | `--xs` suffix only affects device widths of 768px and lower. |
| `.nix-justify-content_middle--sm`  | `--sm` suffix only affects device widths of 1024px and lower. |
| `.nix-flex-direction_column--md`  | `--md` suffix only affects device widths of 1200px and lower. |

</article>